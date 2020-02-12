import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainSiteComponent } from './components/main-site/main-site.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { MembersComponent } from './components/members/members.component';
import { AuthGuard } from './guard/auth.guard';
import { MyProfileComponent } from './components/my-profile/my-profile.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home', canActivate: [AuthGuard]},
  {path: 'home', component: MainSiteComponent},
  {path: 'users/:id/user-profile', component: UserProfileComponent},
  {path: 'event-list', component:EventListComponent},
  {path: 'members', component: MembersComponent},
  {path: 'users/my-profile', component: MyProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
