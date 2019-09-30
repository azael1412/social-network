import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css']
})
export class UserShowComponent implements OnInit {
  login : string;
  user: any[] = [];
  constructor( private route: ActivatedRoute,private router: Router,public userService: UserService) { }

  ngOnInit() {
    this.loadUser();
  }
      // Get user
      loadUser(){
        this.login = this.route.snapshot.params['login'];
        return this.userService.getUser(this.login).subscribe(
           (data : any) => { // Success
             this.user = data;
           },
           (error) => {
             //console.error(error);
           }
         );
       }
       list(){
        this.router.navigate(['users']);
      }

}
