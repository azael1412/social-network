import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { OrderPipe } from 'ngx-order-pipe';
@Component({
  selector: 'app-users-index',
  templateUrl: './users-index.component.html',
  styleUrls: ['./users-index.component.css']
})
export class UsersIndexComponent implements OnInit {
  order: string = 'followers';
  reverse: boolean = true;
  login : string;
  usersDetails: any[] = [];
  users: any[] = [];
  filterUser = '';
  constructor(
    public userService: UserService,
    private orderPipe: OrderPipe
  ) 
  {
    this.sortedCollection = orderPipe.transform(this.usersDetails, 'followers"');
    console.log(this.sortedCollection);
   }

  ngOnInit() {
    this.loadUsers();
    //this.loadUser(this.login);
  }
    // Get users list
    loadUsers(){
     return this.userService.getUsers().subscribe(
        (data : any) => { // Success
          this.users = data;
          // console.log(data);
          for(let i=0;i<data.length;i++){
            this.loadUser(data[i]['login']);
            // console.log(data[i]['login']);
            }
            // console.log(this.userDetails);
        },
        (error) => {
          console.log(error);
        }
      );
    }
    //Get user
    loadUser(login:string){
      return this.userService.getUser(login).subscribe(
          (data : any) => { 
            // Success
            // this.userDetails = data;
           this.usersDetails.push(data);
            
          },
          (error) => {
            console.error(error);
          }
        );
      }

      sortedCollection: any[];
    
      setOrder(value: string) {
        if (this.order === value) {
          this.reverse = !this.reverse;
        }
    
        this.order = value;
      }
    
}
