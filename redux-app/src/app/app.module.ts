import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environemnt

import { contadorReducer } from './contador/contador.reducer';

import { AppComponent } from './app.component';
import { FijoComponent } from './contador/fijo/fijo.component';
import { NietoComponent } from './contador/nieto/nieto.component';
import { HijoComponent } from './contador/hijo/hijo.component';
import { reducers, metaReducers } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    FijoComponent,
    NietoComponent,
    HijoComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ contador: contadorReducer }),
    StoreDevtoolsModule.instrument({
     maxAge: 25, // Retains last 25 states
     logOnly: environment.production // Restrict extension to log-only mode
   }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
