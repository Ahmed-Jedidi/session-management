import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AdminModule } from './app/admin/admin.module';
import { AdminComponent } from './app/admin/admin.component';



/*platformBrowserDynamic().bootstrapModule(AdminModule)
  .catch(err => console.error(err));*/
//platformBrowserDynamic().bootstrapModule(AdminModule)
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));