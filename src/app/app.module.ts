import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UserService } from './user.service';
import { UsersIndexComponent } from './users-index/users-index.component';
import { UserShowComponent } from './user-show/user-show.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { UserFollowersComponent } from './user-followers/user-followers.component';
import { UserFollowingComponent } from './user-following/user-following.component';
@NgModule({
  declarations: [
    AppComponent,
    UsersIndexComponent,
    UserShowComponent,
    FilterPipe,
    UserFollowersComponent,
    UserFollowingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    OrderModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
