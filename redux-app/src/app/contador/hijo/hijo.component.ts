import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { MultiplicarAction, DividirAction } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {

  contador: number;

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
    const accion = new MultiplicarAction(5);
    this.store.dispatch(accion);

    //this.contador *= 2;
    //this.cambioContador.emit(this.contador);
  }

dividir(){
  const accion = new DividirAction(5);
  this.store.dispatch(accion);

    //this.contador /= 2;
    //this.cambioContador.emit(this.contador);
  }

  resetNieto(nuevo){
    //this.contador=nuevo;
    //this.cambioContador.emit(this.contador);

  }

}
