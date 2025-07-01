import { inject, Injectable } from '@angular/core';
import { Firestore, collection, query, collectionData, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface PortfolioCategory {
  name: string;
  subcategories?: PortfolioCategory[];
}

@Injectable({ providedIn: 'root' })
export class PortfolioCategoriesService {

  private readonly _firestore = inject(Firestore);

  getCategories(): Observable<PortfolioCategory[]> {
    const categoriesCollection = collection(this._firestore, 'portfolio-categories');
    return collectionData(categoriesCollection, { idField: 'id' }) as Observable<PortfolioCategory[]>;
  }

  getSubcategories(parentId: string): Observable<PortfolioCategory[]> {
    const categoriesCollection = collection(this._firestore, 'portfolio-categories');
    const q = query(categoriesCollection, where('parentId', '==', parentId));
    return collectionData(q, { idField: 'id' }) as Observable<PortfolioCategory[]>;
  }

}
