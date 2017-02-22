import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
// src/app/app.module.ts
import {AF} from "../providers/af";
import { LoginPageComponent } from './login-page/login-page.component';
@NgModule({
    ....,
  providers: [AF]
})
// Must export the config
export const firebaseConfig = {
  apiKey: '<your-key>',
  authDomain: '<your-project-authdomain>',
  databaseURL: '<your-database-URL>',
  storageBucket: '<your-storage-bucket>',
  messagingSenderId: '<your-messaging-sender-id>'
};
@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [ AppComponent, LoginPageComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
