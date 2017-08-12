import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Header } from './header';
// animations
import { slideIn, slideInDelay, slideDown, slideDownAvatar } from '../animations'; // path to your animations.ts file

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
  header: FirebaseObjectObservable<Header>;
  // headerOnInit: FirebaseObjectObservable<Header>;
  slideInState: string;
  slideInStateDelay: string;
  slideDownState: string;
  slideDownAvatarState: string;
  constructor(private db: AngularFireDatabase) {
    this.header = this.db.object('/header');
    this.header.subscribe(
      (header) => {
        this.slideInState = 'in';
        this.slideDownAvatarState = 'in';
        this.slideDownState = 'in';
        this.slideInStateDelay = 'in';
        console.log(header);
      },
      err => console.log(err)
    );

  }
}
