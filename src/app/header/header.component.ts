import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Header } from './header';
// animations
import { slideIn, slideInDelay} from '../animations'; // path to your animations.ts file

@Component({
  selector: 'dct-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
   slideIn,
   slideInDelay
  ]
})
export class HeaderComponent {
  header: FirebaseObjectObservable<any>;
  slideInState = 'in';
  slideInStateDelay = 'in';
  constructor(db: AngularFireDatabase) {
    this.header = db.object('/header');
  }


}
