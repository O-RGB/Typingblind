import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  constructor(private firestore: AngularFirestore, private storage: AngularFireStorage) { }

  public createURL(): Promise<string> {
    return new Promise((resolve) => {
      this.firestore.collection('tutorial').add({
        game: []
      }).then(data => {
        return resolve(data.id)
      })
    })
  }

  public saveByID(url: string, game: any[]): Promise<boolean> {
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


  public saveSoundByID(id:string,game: string, file: File): Promise<string> {
    return new Promise((resolve) => {
      const filePath = `${id+'/'+game}/${file.name}`;
      const storageRef = this.storage.ref(filePath);
      const uploadTask = this.storage.upload(filePath, file);
      uploadTask.snapshotChanges().pipe(
        finalize(() => {
          storageRef.getDownloadURL().subscribe(downloadURL => {
            return resolve(downloadURL)
          });
        })
      ).subscribe();
    })
  }

  pushFileToStorage(fileUpload: File): Observable<number | undefined> {
    const filePath = `${'test'}/${fileUpload.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload);
    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          // fileUpload.url = downloadURL;
          // fileUpload.name = fileUpload.name;
          console.log(downloadURL)

        });
      })
    ).subscribe();
    return uploadTask.percentageChanges();
  }




}
