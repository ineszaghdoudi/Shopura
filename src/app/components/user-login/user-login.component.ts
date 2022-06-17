import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginService } from 'src/app/services/user-login.service';
import { User } from 'src/app/user';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user: User = new User();

  constructor(
    private router: Router,
    private loginuserservice: UserLoginService
    ) { }

  ngOnInit(): void {
  }

  userLogin(){
    console.log(this.user);
    this.loginuserservice.loginUser(this.user).subscribe(data=>{
      alert("Login Successful");
    }, error=>alert("Sorry please enter correct email and password"));
  }

  gotoSignUp(){
    this.router.navigate(['/signup']);
  }

  gotoForgetPassword(){
    this.router.navigate(['/forgot-password'])
  }



}
