import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  baseUrl="/api";
 


  constructor(private  httpClient: HttpClient,private router:Router) { }

  isLoginSubject = new BehaviorSubject<boolean>(this.isAuthentificated())

  addUser(user){
   
    this.httpClient.post<any>(this.baseUrl+'users/addUser',user).subscribe(
      (msg) => {
        console.log(msg),
        this.router.navigateByUrl("/login");
      },
      (error) => console.log(error)
    );
  }
  getUser(){
    const user= this.httpClient.get(this.baseUrl+'users/allUsers');
    return user;
  }
  
  login(log){
  
    
  this.httpClient.post(this.baseUrl+'/logins/login',log) .subscribe((response:any) => {

   localStorage.setItem('authentificated_user', JSON.stringify(response.user._id));
   }
   ,
      (error) => console.log("error")) 
  }
  
  public isAuthentificated(): boolean {
    const user = localStorage.getItem('authentificated_user');
    if (user == null) {
      return false;
    } else {
      return true;
    }
  }

  logout() {
  localStorage.removeItem('token');
    localStorage.removeItem('authentificated_user');
    this.isLoginSubject.next(false);
    
  }
}