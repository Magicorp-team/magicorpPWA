import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/auth.guard';
import { ArktutoComponent } from '../arktuto/arktuto.component';
import { AuthComponent } from '../auth/auth.component';
import { SignoutComponent } from '../auth/signout.component';
import { HomeComponent } from '../home/home.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { SmileyComponent } from '../smiley/smiley.component';
import { TeamComponent } from '../team/team.component';
import { ProfileComponent } from '../profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'signin', component: AuthComponent },
  { path: 'signup', component: AuthComponent },
  { path: 'team', component: TeamComponent },
  { path: 'smiley', component: SmileyComponent },
  { path: 'arktuto', component: ArktutoComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'signout', component: SignoutComponent, canActivate: [AuthGuard] },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
