import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegistrationService } from 'src/app/services/user-registration.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  user:User = new User();
  constructor(

    private router: Router,
    private registerService: UserRegistrationService

  ) { }

  ngOnInit(): void {
  }

  getUser(){
    console.log(this.user);
    this.registerService.registerUser(this.user).subscribe(data=>{
      alert("User success");
    }, error=>alert("Sorry, try again"));
  }

  gotoLogIn(){
    this.router.navigate(['/login']);
  }
}
