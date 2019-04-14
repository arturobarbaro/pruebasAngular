import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(
        public afAuth: AngularFireAuth,
        public router: Router
    ) {}

    login() {
      this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    }
    logout() {
      this.afAuth.auth.signOut();
    }


  crearusuario(nombre, emmail, password) {
      this.afAuth.auth.createUserWithEmailAndPassword(emmail, password)
      .then( usuario => {
          console.log(usuario)
          this.router.navigate(['/']);
      })
      .catch( error => {
          console.log(error)
      })

  }
}
