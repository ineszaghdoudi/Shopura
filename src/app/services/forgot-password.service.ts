import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  private Url="http://localhost:8080/getuser";
  constructor(private httpClient: HttpClient) { }

  getUser(user: User): Observable<Object> {
    console.log(user);
    return this.httpClient.post(`${this.Url}`,user);
  }
}
