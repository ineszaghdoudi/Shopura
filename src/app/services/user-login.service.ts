import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  private basUrl="http://localhost:8080/authenticate";
  constructor(private httpClient: HttpClient) { }

  public generateToken(request: any) {
    return this.httpClient.post("http://localhost:8080/authenticate", request, {responseType: 'text' as 'json'} );
  }

  public welcome(token: any) {
    let tokenStr='Bearer '+token;
    const headers= new HttpHeaders().set("Authorization", tokenStr);
    return this.httpClient.get("http://localhost:8080", {headers,responseType: 'text' as 'json'});
  }

  loginUser(user: User): Observable<object> {
    console.log(user);
    return this.httpClient.post(`${this.basUrl}`, user);
  }

  
}
