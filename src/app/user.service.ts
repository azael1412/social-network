import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService 
{
  endpoint : string = 'https://api.github.com/users';;
  constructor(protected http: HttpClient) { }
  
  getUsers(): Observable<any> 
  {
    return this.http.get(this.endpoint);
  }
  getUsersFollowers(login:string): Observable<any> 
  {
    return this.http.get(this.endpoint+'/'+login+'/followers');
  }
  getUsersFollowing(login:string): Observable<any> 
  {
    return this.http.get(this.endpoint+'/'+login+'/following');
  }
  getUser(login:string): Observable<any> {
    return this.http.get(this.endpoint+'/'+login)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  //Error handling 
  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }
  
}
