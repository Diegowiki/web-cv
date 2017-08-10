import { slideCard1 } from './../animations';
import { Tarjeta } from './tarjeta';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'dct-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  animations: [
   slideCard1
  ]
})
export class BodyComponent implements OnInit {
  slideCard1St = 'in';

  constructor() { }

  ngOnInit() {
  }

}
