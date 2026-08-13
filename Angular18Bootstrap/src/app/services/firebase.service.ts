import { Injectable, inject } from '@angular/core';

import {
  Firestore,
  collection,
  addDoc,
  collectionData
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private firestore = inject(Firestore);

  async addData(
    collectionName: string,
    data: any
  ) {

    const collectionReference =
      collection(this.firestore, collectionName);

    return await addDoc(
      collectionReference,
      data
    );
  }

  getData(collectionName: string) {

    const collectionReference =
      collection(this.firestore, collectionName);

    return collectionData(
      collectionReference,
      {
        idField: 'id'
      }
    );
  }

}