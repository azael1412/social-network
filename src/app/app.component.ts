import { Component } from '@angular/core';
import { UserService } from './user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Red Social';
  //users: any[] = [];
  constructor(
   // protected userService: UserService
  ) {
  }
  ngOnInit() {
    // this.userService.getUsers()
    // .subscribe(
    //   (data) => { // Success
    //     console.log(data);
    //     this.users = data;
    //   },
    //   (error) => {
    //     console.error(error);
    //   }
    // );
  }
}
