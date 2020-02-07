import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainSiteComponent } from './components/main-site/main-site.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
<<<<<<< HEAD
import { EventListComponent } from './components/event-list/event-list.component';
=======
import { MembersComponent } from './components/members/members.component';

>>>>>>> 650686b7b39ecd2d1bb383ab716e740696ab175c

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: MainSiteComponent},
<<<<<<< HEAD
  {path: 'userProfile', component: UserProfileComponent},
  {path: 'event-list', component:EventListComponent}
  //members
=======
  {path: 'user-profile', component: UserProfileComponent},
  {path: 'members', component: MembersComponent}
>>>>>>> 650686b7b39ecd2d1bb383ab716e740696ab175c
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
