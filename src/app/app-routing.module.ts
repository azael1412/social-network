import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersIndexComponent } from './users-index/users-index.component';
import { UserShowComponent } from './user-show/user-show.component';
import { UserFollowersComponent } from './user-followers/user-followers.component';
import { UserFollowingComponent } from './user-following/user-following.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'users' },
  { path: 'users', component: UsersIndexComponent },
  { path: 'user/:login/show', component: UserShowComponent },
  { path: 'user/:login/followers', component: UserFollowersComponent },
  { path: 'user/:login/following', component: UserFollowingComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
