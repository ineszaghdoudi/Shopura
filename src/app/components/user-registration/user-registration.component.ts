import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegistrationService } from 'src/app/services/user-registration.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  user:User = new User();
  constructor(

    private router: Router,
    private registerService: UserRegistrationService
    
  ) { }

  ngOnInit(): void {
  }

  gotoLogIn(){
    this.router.navigate(['/login']);
  }

  userRegister(){
    console.log(this.user);
    this.registerService.registerUser(this.user).subscribe(data=>{
      alert("User added successfully")
    }, error=>alert("Sorry user wasn't added"));
  }

}
