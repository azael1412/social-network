import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-followers',
  templateUrl: './user-followers.component.html',
  styleUrls: ['./user-followers.component.css']
})
export class UserFollowersComponent implements OnInit {
  rank:any[]=[];
  opcionSeleccionado: string  = '5';
  verSeleccion: string        = '5';
  login : string;
  users: any[] = [];
  usersDetails: any[] = [];
  constructor(
    public userService: UserService,
    private route: ActivatedRoute
  ) { 
    this.rank = [10,15]; 
  }

  ngOnInit() {
    this.loadUsersFollowers();
  }
  loadUsersFollowers(){
    this.login = this.route.snapshot.params['login'];
    return this.userService.getUsersFollowers(this.login).subscribe(
       (data : any) => { // Success
         this.users = data;
         for(let i=0;i<data.length;i++){
          this.loadUser(data[i]['login']);
          // console.log(data[i]['login']);
          }
       },
       (error) => {
         console.error(error);
       }
     );
   }
    //Get user
    loadUser(login:string){
      return this.userService.getUser(login).subscribe(
          (data : any) => { 
            // Success
           this.usersDetails.push(data);
            
          },
          (error) => {
            console.error(error);
          }
        );
      }
   capturar() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.verSeleccion = this.opcionSeleccionado;
}
}
