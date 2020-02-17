import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EventListComponent } from './components/event-list/event-list.component';
import { HeaderComponent } from './components/header/header.component';
import { MainSiteComponent } from './components/main-site/main-site.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { EventFilterComponent } from './components/event-filter/event-filter.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { MembersComponent } from './components/members/members.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LogInModalComponent } from './components/log-in-modal/log-in-modal.component';
import { RegistrationModalComponent } from './components/registration-modal/registration-modal.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { LogoutSuccessModalComponent } from './components/logout-success-modal/logout-success-modal.component';
import { NewEventComponent } from './components/new-event/new-event.component';
import { UserImageComponent } from './components/user-image/user-image.component';
import { ModifyEventComponent } from './components/modify-event/modify-event.component';


@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    HeaderComponent,
    MainSiteComponent,
    UserProfileComponent,
    EventFilterComponent,
    EventCardComponent,
    LogInModalComponent,
    RegistrationModalComponent,
    ProfileComponent,
    MembersComponent,
    MyProfileComponent,
    LogoutSuccessModalComponent,
    NewEventComponent,
    UserImageComponent,
    ModifyEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    LogInModalComponent,
    RegistrationModalComponent,
    LogoutSuccessModalComponent,
    ModifyEventComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
