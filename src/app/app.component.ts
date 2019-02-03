import { Component } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyC8Pi-vCJoVFYrtim_v_ZPhgihE9hvIog4",
      authDomain: "biblio-b6438.firebaseapp.com",
      databaseURL: "https://biblio-b6438.firebaseio.com",
      projectId: "biblio-b6438",
      storageBucket: "biblio-b6438.appspot.com",
      messagingSenderId: "427386145936"
    };
    firebase.initializeApp(config);




  }

}
