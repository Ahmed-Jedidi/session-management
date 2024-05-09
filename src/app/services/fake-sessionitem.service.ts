import { Injectable } from '@angular/core';
import { SessionItemListComponent } from '../session-item-list/session-item-list.component';
import { Session } from '../models/session.model';
import { SESSIONITEMS } from '../models/sessions';
import {ActivatedRoute} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class FakeSessionItemService {

  constructor() { }
  
  getSession(id: number) {
    return SESSIONITEMS[id - 1];
  }
  /*getSessionItems(): Session[] {
    //return SessionItemListComponent.sessionItems;
    return SESSIONITEMS; // Return the SESSIONITEMS array
  }*/

  // Méthode pour obtenir toutes les sessions
  get(): Session[] {
    return SESSIONITEMS;
  }


    
  // Méthode pour ajouter une nouvelle session
  add(sessionItem: Session): void {
    SESSIONITEMS.push(sessionItem);
  }

  // Méthode pour mettre à jour une session existante
  updateSession(updatedSession: Session): void {
    const index = SESSIONITEMS.findIndex(session => session.id === updatedSession.id);
    if (index !== -1) {
      SESSIONITEMS[index] = updatedSession;
    }
  }

  delete(sessionItem: Session): void {
    const index = SESSIONITEMS.findIndex(item => item.id === sessionItem.id);
    if (index !== -1) {
      SESSIONITEMS.splice(index, 1);
    }
  }

  // Méthode pour supprimer une session
  deleteById(sessionId: number): void {
    const index = SESSIONITEMS.findIndex(item => item.id === sessionId);
    if (index !== -1) {
      SESSIONITEMS.splice(index, 1);
    }
  }
}
