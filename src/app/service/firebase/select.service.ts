import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class SelectService {

 
  constructor(private firestore: AngularFirestore) {
    // this.firestore.collection('tutorial')
    
    
   }

   public getCradById(id: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('tutorial')
        .doc('PUpcTqSrDd7EC3meMD9p').ref
        .get()
        .then(doc => {
          resolve(<any>doc.data())
        })
        .catch(error => reject(error))
    })
  }

}
