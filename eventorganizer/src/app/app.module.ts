import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EventListComponent } from './components/event-list/event-list.component';
import { HeaderComponent } from './components/header/header.component';
import { MainSiteComponent } from './components/main-site/main-site.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { LogInModalComponent } from './components/log-in-modal/log-in-modal.component';
import { RegistrationModalComponent } from './components/registration-modal/registration-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    HeaderComponent,
    MainSiteComponent,
    UserProfileComponent,
    LogInModalComponent,
    RegistrationModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  entryComponents: [
    LogInModalComponent,
    RegistrationModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
