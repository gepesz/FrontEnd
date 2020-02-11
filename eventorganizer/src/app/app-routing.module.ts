import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainSiteComponent } from './components/main-site/main-site.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { MembersComponent } from './components/members/members.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home', canActivate: [AuthGuard]},
  {path: 'home', component: MainSiteComponent},
  {path: 'user-profile', component: UserProfileComponent},
  {path: 'event-list', component:EventListComponent},
  {path: 'members', component: MembersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
