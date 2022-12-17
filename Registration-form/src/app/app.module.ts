import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomValidators } from './shared/custom-validation';
import { UserRegistrtaionComponent } from './user-registrtaion/user-registrtaion.component';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators'; // <-- #2 import module

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrtaionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RxReactiveFormsModule
  ],
  providers: [CustomValidators],
  bootstrap: [AppComponent]
})
export class AppModule { }
