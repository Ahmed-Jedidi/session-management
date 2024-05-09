import { CommonModule, NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FakeSessionItemService } from '../services/fake-sessionitem.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-session-item',
  providers : [FakeSessionItemService],
  standalone: true,
  imports: [NgStyle, NgIf, CommonModule, RouterLink, RouterLinkActive ],
  templateUrl: './session-item.component.html',
  styleUrl: './session-item.component.css'
})
export class SessionItemComponent {
  @Input() isAdmin!: boolean;


  @Input() name!: string;
  @Input() session: any;
  couleur: string = 'Red';

  constructor(private sessionItemService: FakeSessionItemService) {}

  inscrire() {
    //this.session.name = "Formation Web Avancé";
    console.log("Nouvelle Inscription");

    if (this.session.Participants < 20) {
      this.session.Participants++; // Incrémentation du nombre de participants
      if (this.session.Participants === 20) {
        console.log("Session Complete");
        this.isCompleted = true; // Mettez à jour isCompleted à true lorsque la session est complétée
      }
    }
  }

  isCompleted: boolean = false; // Nouvel attribut pour indiquer si la session est complétée

  checkCompletion() {
    this.isCompleted = (this.session.Participants >= 20);
    //this.session.some(session => session.participants >= 20);
  }

  onDelete() {
    this.sessionItemService.delete(this.session);
    //this.sessionItemService.deleteById(this.session.id);
  }
  
  /*isSessionComplete(): boolean {
    return this.session.Participants >= 20;
  }*/
  


}
