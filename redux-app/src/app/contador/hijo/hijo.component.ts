import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {

  constructor( private store:Store<AppState> ) { }

  ngOnInit() {

    this.store.select('contador').subscribe(
      contador=>{
        this.contador=contador;
        console.log(contador)
      }
    )
  }

  multiplicar( ){
    this.contador *= 2;
    //this.cambioContador.emit(this.contador);
  }

dividir(){
    this.contador /= 2;
    //this.cambioContador.emit(this.contador);
  }

  resetNieto(nuevo){
    this.contador=nuevo;
    //this.cambioContador.emit(this.contador);

  }

}
