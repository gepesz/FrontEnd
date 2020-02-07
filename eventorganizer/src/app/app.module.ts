import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EventListComponent } from './components/event-list/event-list.component';
import { HeaderComponent } from './components/header/header.component';
import { MainSiteComponent } from './components/main-site/main-site.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
<<<<<<< HEAD
import { EventFilterComponent } from './components/event-filter/event-filter.component';
import { EventCardComponent } from './components/event-card/event-card.component';
=======
import { MembersComponent } from './components/members/members.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LogInModalComponent } from './components/log-in-modal/log-in-modal.component';
import { RegistrationModalComponent } from './components/registration-modal/registration-modal.component';

>>>>>>> 650686b7b39ecd2d1bb383ab716e740696ab175c

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    HeaderComponent,
    MainSiteComponent,
    UserProfileComponent,
<<<<<<< HEAD
    EventFilterComponent,
    EventCardComponent
=======
    LogInModalComponent,
    RegistrationModalComponent,
    ProfileComponent,
    MembersComponent
>>>>>>> 650686b7b39ecd2d1bb383ab716e740696ab175c
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
