import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SondageService {

  baseUrl="/api";

  constructor(private  httpClient: HttpClient) { }

  addSondage(s){
    const users = JSON.parse(localStorage.getItem("authentificated_user")) || [];
    this.httpClient.post<any>(this.baseUrl+'sondages/addSondage/'+users,s).subscribe(
      (msg) => {
        console.log(msg),
        location.reload()
      },
      (error) => console.log(error)
    );
  }
  getSondage(){
    const sondage= this.httpClient.get(this.baseUrl+'sondages/allSondage');
    return sondage;
  }
  getMySondage(){
    const users = JSON.parse(localStorage.getItem("authentificated_user")) || [];
    const sondage= this.httpClient.get(this.baseUrl+'sondages/getMySondage/'+users);
    return sondage;
  }
  voter(idSondage){
    const users = JSON.parse(localStorage.getItem("authentificated_user")) || [];
  
    this.httpClient.put(this.baseUrl+'sondages/updateSondage/'+idSondage+'/'+users,'').subscribe(
      (rep) => {
        console.log(rep)
      },
      (error) => console.log(error)
    );
  }
  getSondagebyid(id){
    const sondage= this.httpClient.get(this.baseUrl+'sondages/getSondageById/'+id);
    return sondage;
  }
  getAllVote(){
    const sondage= this.httpClient.get(this.baseUrl+'sondages/getAllVote/');
    return sondage;
  }
}
