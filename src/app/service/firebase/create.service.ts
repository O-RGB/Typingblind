import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  constructor(private firestore: AngularFirestore) { }

  public createURL():Promise<string>{
    return new Promise((resolve) => {
      this.firestore.collection('tutorial').add({
        game: []
      }).then(data => {
        return resolve(data.id)
      })
    })
  }

  public saveByID(url:string,game:any[]):Promise<boolean>{
    return new Promise((resolve) => {
      this.firestore.collection('tutorial')
      .doc(url).update({ game: game }).then(data => {
        return resolve(true)
      });
    })
  }

  public getById(id: string): Promise<any> {
    return new Promise<any>((resolve) => {
      this.firestore
        .collection('tutorial')
        .doc(id).ref
        .get()
        .then(doc => {
          resolve(doc.data())
        })
    })
  } 


}
