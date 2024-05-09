// admin.module.ts
import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgIf  } from '@angular/common';
import { SessionItemComponent } from '../session-item/session-item.component';
import { SessionItemListComponent } from '../session-item-list/session-item-list.component';

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { InscriptionDisabledDirective } from '../inscription-disabled.directive';
import { SessionAddFormComponent } from '../session-add-form/session-add-form.component';


import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { SessionEditFormComponent } from '../session-edit-form/session-edit-form.component';
import { AdminComponent } from './admin.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'add', component: SessionAddFormComponent},
      { path: 'edit/:id', component: SessionEditFormComponent },
      { path: 'list', component: SessionItemListComponent, data: { isAdmin: true } },
      { path: '', redirectTo: 'list', pathMatch: 'full', data: { isAdmin: true } }],
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(adminRoutes),
    SessionAddFormComponent,
    CommonModule,
    SessionItemComponent,
    SessionItemListComponent,
    InscriptionDisabledDirective, SessionItemComponent,SessionItemListComponent, FormsModule, NgIf, NgFor, ReactiveFormsModule
  ],
  
})
export class AdminModule { }
