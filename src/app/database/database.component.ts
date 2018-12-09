import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {
  items: Observable<any[]>;
  itemRef: AngularFireList<any>;
  data: any;
  constructor( db: AngularFireDatabase ) {
    this.itemRef = db.list('user');
    this.items = this.itemRef.snapshotChanges().pipe(
      map(changes => changes.map(c => ({ key: c.payload, ...c.payload.val() }))));
   }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {

    console.log(f.value.nom);

    this.data = {
      nom: f.value.lname,
      prenom: f.value.fname,
      age: f.value.age,
      hair: f.value.hair,
      glasses: f.value.glasses,
      imgPath: f.value.imgPath

    };

    this.itemRef.push(this.data);

  }

}
