import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AplicationInfoComponent } from './aplication-info/aplication-info.component';
import { LoginCardComponent } from './login-card/login-card.component';
import { LoginModule from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    AplicationInfoComponent,
    LoginCardComponent
  ],
  imports: [
    BrowserModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
