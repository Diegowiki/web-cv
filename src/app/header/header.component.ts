import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Header } from './header';
// animations
import { slideIn, slideInDelay, slideDown, slideDownAvatar} from '../animations'; // path to your animations.ts file

@Component({
  selector: 'dct-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
   slideIn,
   slideInDelay,
   slideDown,
   slideDownAvatar
  ]
})
export class HeaderComponent {
  header: FirebaseObjectObservable<any>;
  slideInState = 'in';
  slideInStateDelay = 'in';
  slideDownState = 'in';
  slideDownAvatarState = 'in';
  constructor(db: AngularFireDatabase) {
    this.header = db.object('/header');
  }


}
