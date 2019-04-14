import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(
        public afAuth: AngularFireAuth,
        public router: Router
    ) {}

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
          console.log(usuario)
          this.router.navigate(['/']);
      })
      .catch( error => {
          Swal.fire("Error al crear cuenta", error.message, "error");

      })

  }
}
