import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParentsComponent } from './parents/parents.component';
import { FormsComponent } from './parents/forms/forms.component';
import { TableComponent } from './parents/table/table.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule,  MatSelectModule,  MatInputModule, MatIconModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,

    ParentsComponent,
    FormsComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
