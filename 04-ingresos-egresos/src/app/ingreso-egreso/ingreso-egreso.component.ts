import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { IngresoEgreso } from './ingreso-egreso.model';
import { IngresoEgresoService } from './ingreso-egreso.service';
import Swal from 'sweetalert2';
import { AppState } from '../app.reducer';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ActivarLoadingAction, DesactivarLoadingAction } from '../shared/ui.accions';


@Component({
  selector: 'app-ingreso-egreso',
  templateUrl: './ingreso-egreso.component.html',
  styles: []
})
export class IngresoEgresoComponent implements OnInit {

    forma: FormGroup;
    tipo = 'ingreso';

    cargando: boolean;
    loadingSubs: Subscription = new Subscription();

  constructor(
      public ingresoEgresoService: IngresoEgresoService,
      private store: Store<AppState>
    ) { }

  ngOnInit() {
      this.loadingSubs = this.store.select('ui').subscribe(ui=> this.cargando = ui.isLoading);
      this.forma = new FormGroup({
          'descripcion': new FormControl('', Validators.required),
          'monto': new FormControl(0, Validators.min(0)),
      })
  }
  ngOnDestroy() {
      this.loadingSubs.unsubscribe();
  }

  crearIngresoEgreso() {
      this.store.dispatch( new ActivarLoadingAction() );

      const ingresoEgreso = new IngresoEgreso({...this.forma.value, tipo: this.tipo});
      this.ingresoEgresoService.crearIngresoEgreso( ingresoEgreso )
      .then( ()=>{
          this.store.dispatch( new DesactivarLoadingAction() );
          Swal('Creado', ingresoEgreso.descripcion, 'success');
          this.forma.reset({monto: 0});
      })
      .catch( ()=>{
          this.store.dispatch( new DesactivarLoadingAction() );
      })
  }

}
