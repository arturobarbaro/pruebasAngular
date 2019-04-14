import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

import * as firebase from 'firebase';
import { map } from 'rxjs/operators';

import Swal from 'sweetalert2';
import { User } from './user.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(
        public afAuth: AngularFireAuth,
        public router: Router,
        public afDB: AngularFirestore,
    ) {}

    initAuthListener() {
        this.afAuth.authState.subscribe((fbUser: firebase.User) => {
            console.log(fbUser);
        })
    }

    login(emmail, password) {
      this.afAuth.auth.signInWithEmailAndPassword(emmail, password)
      .then( usuario => {
          console.log(usuario)
          this.router.navigate(['/']);
      })
      .catch( error => {
          console.log(error);
          Swal.fire("Error en el login", error.message, "error");
      })
    }

    logout() {
      this.router.navigate(['/login']);
      this.afAuth.auth.signOut();
    }


  crearusuario(nombre, emmail, password) {
      this.afAuth.auth.createUserWithEmailAndPassword(emmail, password)
      .then( usuario => {
          const user: User = {
              uid: usuario.user.uid,
              nombre: nombre,
              email: usuario.user.email
          }

          this.afDB.doc(`${user.uid}/usuario`)
              .set(user)
              .then(()=>{
                  this.router.navigate(['/']);
              })

      })
      .catch( error => {
          Swal.fire("Error al crear cuenta", error.message, "error");

      })

  }

  isAuth() {
      return this.afAuth.authState.pipe(
          map( fbUser => {
              if (fbUser==null){
                  this.router.navigate(['/login']);
              }

              return fbUser != null
          })
      )
  }
}
