import { FakeSessionItemService } from './../services/fake-sessionitem.service';
import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgIf  } from '@angular/common';
import { SessionItemComponent } from '../session-item/session-item.component';
import { SessionItemListComponent } from '../session-item-list/session-item-list.component';

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { InscriptionDisabledDirective } from '../inscription-disabled.directive';
import { Session } from '../models/session.model';


import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-session-add-form',
  providers: [FakeSessionItemService],
  standalone: true,
  imports: [CommonModule,
    SessionItemComponent,
    SessionItemListComponent,
    InscriptionDisabledDirective, SessionItemComponent,SessionItemListComponent, FormsModule, NgIf, NgFor, ReactiveFormsModule],
  templateUrl: './session-add-form.component.html',
  styleUrl: './session-add-form.component.css'
})
export class SessionAddFormComponent {

  
  constructor(private sessionItemService: FakeSessionItemService, private router : Router) {}

  session = {
    id : '',
    name: '',
    track: '',
    date: '',
    duree: '',
    address: '',
    Participants: '',
    isCompleted: ''
  };
  /*firstSession = {
    id: 1,
    name : "Formation Web",
    track: "Mean Steak",
    date: new Date('2018-06-13'),
    duree: 3,
    local : "Lyon",
    Participants : 0
  };*/
  tracks = ['MEAN', 'Angular', 'NodeJS', 'Android', 'Swift', 'Xamarin'];

  onSubmit() {
    console.log('Données du formulaire soumises :', this.session);
    let a = new Session((this.sessionItemService.get().slice(-1)[0].id !== undefined ? this.sessionItemService.get().slice(-1)[0].id + 1 : 1 ), this.session.name, this.session.track, new Date(this.session.date), Number(this.session.duree), this.session.address, Number(this.session.Participants), (this.session.isCompleted === 'true'));
    this.sessionItemService.add(a);
    console.log('Données du formulaire soumises :', this.sessionItemService.get().values);

    this.session = {
      id : '',
      name: '',
      track: '',
      date: '',
      duree: '',
      address: '',
      Participants: '',
      isCompleted: ''
    };

    setTimeout(() => {this.router.navigate(['/admin/list'],).then(() => {
      //window.location.reload();
    });}, 0);
  }
}

