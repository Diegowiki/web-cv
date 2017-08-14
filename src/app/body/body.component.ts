import { slideCard1, fadeInModal, fadeInModalContent } from './../animations';
import { Tarjeta } from './tarjeta';
import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'dct-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  animations: [
    slideCard1,
    fadeInModal,
    fadeInModalContent
  ]
})
export class BodyComponent {
  tarjetas: FirebaseListObservable<Tarjeta>;
  _tarjeta: FirebaseObjectObservable<any>;
  slideCard1St: string;
  slideModal: string;
  modalActive: boolean;
  lista: string[];
  element: any;

  constructor(private db: AngularFireDatabase) {
    this.tarjetas = this.db.list('/tarjetas');
    this.tarjetas.subscribe(
      (tarjeta) => {
        this.slideCard1St = 'in';
        this.element = document.getElementById('box');
        console.log(tarjeta);
      },
      err => console.log(err)
    );
  }

  addCard() {
    this.tarjetas.push({ title: 'nueva tarjeta', items: ['hola', 'que pasa'], visible: true });
    setTimeout(() => { this.element.scrollIntoView(false); }, 300);

  }
  rmCard(_tarjeta: any) {
    this._tarjeta = this.db.object('tarjetas/' + _tarjeta.$key);
    // this._tarjeta.set({visible: 0});
    this.tarjetas.remove(_tarjeta.$key);
  }

  toggleModal(_tarjeta: any) {
    this.modalActive = (this.modalActive === true ? false : true);
    this.slideModal = 'in';
    // this.slideModal = (this.slideModal === 'in' ? '*' : 'in');
    this._tarjeta = _tarjeta;
    console.log(this.modalActive, this.slideModal, this._tarjeta);
  }



}
