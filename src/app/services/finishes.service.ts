import { inject, Injectable, signal } from '@angular/core';
import { Firestore, collection, getDocs, doc, getDoc, getCountFromServer, query, orderBy, limit, startAfter } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';

interface PaginationParams {
  pageSize: number;
  page: number;
}

@Injectable({ providedIn: 'root' })
export class FinishesService {

  public selectedProduct = signal<any>(null);

  private readonly _firestore = inject(Firestore);

  getPortfolio(params: PaginationParams = { pageSize: 12, page: 0 }): Observable<any[]> {
    const portfolioRef = collection(this._firestore, 'portfolio');
    const startIndex = params.page * params.pageSize;

    let q = query(portfolioRef, orderBy('slug', 'asc'), limit(params.pageSize));

    if (startIndex > 0) {
      // Primeiro, precisamos buscar o documento de referência
      return from(this.getReferenceDocument(portfolioRef, startIndex).then(lastDoc => {
        if (lastDoc) {
          q = query(portfolioRef, orderBy('slug', 'asc'), startAfter(lastDoc), limit(params.pageSize));
        }
        return getDocs(q).then(snapshot =>
          snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }))
        );
      }));
    }

    return from(getDocs(q).then(snapshot =>
      snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
    ));
  }

  private async getReferenceDocument(collectionRef: any, startIndex: number): Promise<any> {
    const q = query(collectionRef, orderBy('slug', 'asc'), limit(startIndex));
    const snapshot = await getDocs(q);
    return snapshot.docs[snapshot.docs.length - 1];
  }

  getPortfolioById(id: string): Observable<any> {
    const portfolioRef = doc(this._firestore, 'portfolio', id);
    return from(getDoc(portfolioRef).then(doc => {
      if (doc.exists()) {
        return {
          id: doc.id,
          ...doc.data()
        };
      }
      return null;
    }));
  }

  getCustomPortfolio(): Observable<any> {
    const portfolioRef = collection(this._firestore, 'portfolio');
    return from(getDocs(portfolioRef).then(snapshot => {
      if (!snapshot.empty) {
        const firstDoc = snapshot.docs[0];
        const secondDoc = snapshot.docs[1];
        return [
          { id: firstDoc.id, ...firstDoc.data() },
          { id: secondDoc.id, ...secondDoc.data() }
        ];
      }
      return null;
    }));
  }

  getPortfolioCount(): Observable<number> {
    const portfolioRef = collection(this._firestore, 'portfolio');
    return from(getCountFromServer(portfolioRef).then(snapshot => snapshot.data().count));
  }

}
