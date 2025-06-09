import { inject, Injectable } from '@angular/core';
import { Firestore, collection, getDocs, doc, getDoc, getCountFromServer } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FinishesService {

  private readonly _firestore = inject(Firestore);

  getPortfolio(): Observable<any[]> {
    const portfolioRef = collection(this._firestore, 'portfolio');
    return from(getDocs(portfolioRef).then(snapshot =>
      snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
    ));
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
