import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Item
{
  id?:string;
  title?:string;
  description?:string;
  sur?:string;
}

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  itemCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  constructor(public afs: AngularFirestore) {
    this.items = this.afs.collection('items').valueChanges();
   }

   getItems(){return this.items;}
}


