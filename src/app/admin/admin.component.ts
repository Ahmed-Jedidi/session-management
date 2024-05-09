import { Component, OnInit } from '@angular/core';
import { SessionAddFormComponent } from "../session-add-form/session-add-form.component";
import { SessionEditFormComponent } from '../session-edit-form/session-edit-form.component';
import { FakeSessionItemService } from '../services/fake-sessionitem.service';
import { SessionItemListComponent } from "../session-item-list/session-item-list.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-admin',
    standalone: true,
    providers: [FakeSessionItemService],
    templateUrl: './admin.component.html',
    styleUrl: './admin.component.css',
    imports: [SessionAddFormComponent, SessionEditFormComponent, SessionItemListComponent, RouterLink, RouterLinkActive, RouterOutlet]
})

export class AdminComponent implements OnInit {
    public u : boolean | undefined;
    ngOnInit(): void {
        this.u = true;
    }

   
    


}
