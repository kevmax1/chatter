import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: FirebaseListObservable<any[]>;
  pseudo:any;
  field:string;

  constructor(public navCtrl: NavController,public db: AngularFireDatabase) {
    this.items = this.db.list('/messages',{
      query:{
        limitToLast: 5
      }
    });
  }

  login(){
    if(this.field && this.field!=""){
      this.pseudo = this.field;
      this.field ="";
    }
  }

  send(){
    if(this.field && this.field!=""){
      this.items.push({message: this.field,pseudo: this.pseudo});
      this.field ="";
    }
  }

}
