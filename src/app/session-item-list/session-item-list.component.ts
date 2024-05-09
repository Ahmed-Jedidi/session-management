
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';

import { CommonModule, NgFor, NgIf } from '@angular/common';
import { SessionItemComponent } from '../session-item/session-item.component';

// session-item-list.component.ts
import { Session } from '../models/session.model';

import { FakeSessionItemService } from './../services/fake-sessionitem.service';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { SESSIONITEMS } from '../models/sessions';
@Component({
  selector: 'app-session-item-list',
  providers: [FakeSessionItemService],
  standalone: true,
  imports: [ RouterLink, RouterLinkActive, SessionItemComponent,SessionItemListComponent, CommonModule, FormsModule, NgIf, NgFor, ReactiveFormsModule],
  templateUrl: './session-item-list.component.html',
  styleUrl: './session-item-list.component.css'
})
export class SessionItemListComponent implements OnInit {
  isAdmin!: boolean;


  //@Output() totalParticipantsChanged = new EventEmitter<number>(); // Déclaration de l'événement

///////////////////////////////////////////////////////////////////////
  sessions: Session[] | undefined;

  constructor(private sessionItemService: FakeSessionItemService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.sessions = this.sessionItemService.get();


    this.isAdmin = this.route.snapshot.data['isAdmin'];
  }
/////////////////////////////////////////////////////////////////////
  /*sessionItems = [
    {
      id: 1,
      name: 'Web',
      track: 'MEAN Stack',
      date: new Date('2023-06-13'),
      duree: 3,
      local: 'Lyon',
      Participants: 0
    },
    {
      id: 2,
      name: 'Mobile',
      track: 'Angular et Ionic',
      date: new Date('2023-08-10'),
      duree: 5,
      local: 'Paris',
      Participants: 0
    },
    {
      id: 3,
      name: 'Web',
      track: 'NodeJS',
      date: new Date('2023-07-20'),
      duree: 5,
      local: 'Lyon',
      Participants: 0
    }
  ];
  static sessionItems: any;*/

  getSession(id: number) {
    return SESSIONITEMS[id - 1];
    }

  getTotalParticipants(): number {
    let totalParticipants = 0;
    this.sessions!.forEach(session => {
      totalParticipants += session.Participants;
    });
    return totalParticipants;
  }

  /*calculateTotalParticipants(): void {
    let totalParticipants = 0;
    this.sessionItems.forEach(session => {
      totalParticipants += session.Participants;
    });
    this.totalParticipantsChanged.emit(totalParticipants); // Émission de l'événement avec le total des participants
  }*/

  /*getTotalSessions(): number {
    return this.sessionItems.length;
  }*/

}
