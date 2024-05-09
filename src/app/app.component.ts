import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { InscriptionDisabledDirective } from './inscription-disabled.directive';
import { AdminModule } from './admin/admin.module';
import { AdminComponent } from "./admin/admin.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [InscriptionDisabledDirective, RouterOutlet, SessionItemComponent, SessionItemListComponent, AdminModule, CommonModule, FormsModule, NgIf, NgFor, ReactiveFormsModule, AdminComponent]
})
export class AppComponent {
  title = 'tp-angular-4';
  public variableValue = true;

  // TP
  //name: string = 'Formation web';
  /*firstSession = {
    id: 1,
    name : "Formation Web",
    track: "Mean Steak",
    date: new Date('2018-06-13'),
    duree: 3,
    local : "Lyon",
    Participants : 0
  };
  getTotalParticipants(): number {
    return this.firstSession.Participants;
  }*/
  /*getTotalSessions(): number {
    return this.sessionItems.length;
  }*/




  
  
}
