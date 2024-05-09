import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgIf  } from '@angular/common';
import { SessionItemComponent } from '../session-item/session-item.component';
import { SessionItemListComponent } from '../session-item-list/session-item-list.component';

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { InscriptionDisabledDirective } from '../inscription-disabled.directive';
import { Session } from '../models/session.model';
import { FakeSessionItemService } from '../services/fake-sessionitem.service';
import { ActivatedRoute, Router } from '@angular/router';

//import {SessionHttpService} from '../session-http.service';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-session-edit-form',
  providers: [FakeSessionItemService],
  standalone: true,
  imports: [CommonModule,
    SessionItemComponent,
    SessionItemListComponent,
    InscriptionDisabledDirective, SessionItemComponent,SessionItemListComponent, FormsModule, NgIf, NgFor, ReactiveFormsModule],
  templateUrl: './session-edit-form.component.html',
  styleUrl: './session-edit-form.component.css'
})
export class SessionEditFormComponent implements OnInit {
  public id!: number;
  private sub: any;

  session: any/*Session | undefined*/ ;
  tracks = ['MEAN', 'Angular','NodeJS', 'Android', 'Swift', 'Xamarin'];
  
constructor(private route: ActivatedRoute, private sessionItemService: FakeSessionItemService/*, private sessionhttp: SessionHttpService*/, private router : Router) { }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => { this.id = params['id'];
    // (+) converts string 'id' to a number
    });
  /*this.session = this.sessionItemService.getSession(1); */
  //session1 = new Session(1, 'Web', this.tracks[0], new Date('2021-12-09'), 10, 'Tunis', 0, false);
  console.log('Session ID ' + this.id.toString());
  this.session = this.sessionItemService.getSession(this.id);
  }
  
  editSession(sessionItem: any) {
  console.log(sessionItem);
  this.sessionItemService.updateSession(this.session);
  }

  /*session = {
    id: 1,
    name: 'Formation Web',
    track: 'MEAN Stack',
    date: '2023-06-13',
    duree: 3,
    local: 'Lyon',
    Participants: 0
  };*/

  onSubmit() {
    console.log('Données du formulaire soumises :', this.session);
    this.sessionItemService.updateSession(this.session);

    setTimeout(() => {this.router.navigate(['/admin/list'],).then(() => {
      //window.location.reload();
    });}, 0);
  }

}
