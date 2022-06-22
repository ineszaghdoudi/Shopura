import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

/* const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers':' Origin, Content-Type, X-Auth-Token'
  })
}; */

@Injectable({
  providedIn: 'root'
})
export class AdminUserService {
    

  private addUsrURL="http://localhost:8080/signup";
  private getUsrURL="http://localhost:8080/getAll";
  private editUsrURL="http://localhost:8080/updateuser";
  private deleteUsrURL="http://localhost:8080/deleteuser";

  constructor(private httpClient: HttpClient) { }

  addUser(user: User): Observable<Object> {
    console.log(user);
    return this.httpClient.post(`${this.addUsrURL}`,user);
  }

  getAllUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.getUsrURL}`);
  }

  updateUser(user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.editUsrURL}`,user);
  }

  deleteUser(user: User): Observable<User> {
    return this.httpClient.delete<User>(`${this.deleteUsrURL}`+'/'+`${user.email}`);
  }
}
 