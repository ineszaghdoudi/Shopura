import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AdminUserService } from 'src/app/services/admin-user.service';

declare var window: any;
@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {

  formModalAdd: any;
  formModalEdit: any;
  userDetail !: FormGroup;
  userObj : User = new User();
  userList : User[] = [];

  constructor(
   private formBuilder: FormBuilder,
   private usrService: AdminUserService
  ) { }

  ngOnInit(): void {
    this.getAllUsers();

    this.formModalAdd=new  window.bootstrap.Modal(
      document.getElementById("addUser")
    );

    this.formModalEdit=new  window.bootstrap.Modal(
      document.getElementById("editUser")
    );

    this.userDetail = this.formBuilder.group({
      id : [''],
      name : [''],
      email : [''],
      phone: [''],
      password: [''],
      cpassword: ['']
    })
  }

  addUser() {
    console.log(this.userDetail);
    this.userObj.name = this.userDetail.value.name;
    this.userObj.email = this.userDetail.value.email;
    this.userObj.phone = this.userDetail.value.phone;
    this.userObj.password = this.userDetail.value.password;
    this.userObj.cpassword = this.userDetail.value.cpassword;

    this.usrService.addUser(this.userObj).subscribe(res=>{
      
      console.log(res);
      this.clear();
      this.closeModal();
      this.getAllUsers();
    }, err =>{
      console.log(err);
      alert("Sorry user wasn't added");
    });
  }

  editUser(usr : User){
    this.userDetail.controls['id'].setValue(usr.id);
    this.userDetail.controls['name'].setValue(usr.name);
    this.userDetail.controls['email'].setValue(usr.email);
    this.userDetail.controls['phone'].setValue(usr.phone);
    this.userDetail.controls['password'].setValue(usr.password);
    this.userDetail.controls['cpassword'].setValue(usr.cpassword);
  }

  updateUser(){
    this.userObj.id = this.userDetail.value.id;
    this.userObj.name = this.userDetail.value.name;
    this.userObj.email = this.userDetail.value.email;
    this.userObj.phone = this.userDetail.value.phone;
    this.userObj.password = this.userDetail.value.password;
    this.userObj.cpassword = this.userDetail.value.cpassword;

    this.usrService.updateUser(this.userObj).subscribe(res=>{
      console.log(res);
      this.closeModalEdit();
      this.getAllUsers();
      
      alert("User successfully edited");
    }, err =>{
      console.log(err);
      alert("Sorry user wasn't edited");
    })
  }

  deleteUser(user: User){
    this.usrService.deleteUser(user).subscribe(res=>{
      console.log(res);
      alert("User deleted succesfully");
      this.getAllUsers();
    }, err =>{
      console.log(err);
      alert("Sorry unable to delete user");
    })
  }

  getAllUsers(){
    this.usrService.getAllUsers().subscribe(res=>{
      this.userList = res;
    }, err=>{
      console.log(err);
    });
  }

  openModal() {
    this.formModalAdd.show();
  }

  openModalEdit() {
    this.formModalEdit.show();
  }

  closeModal(){
    this.formModalAdd.hide();
  }

  closeModalEdit(){
    this.formModalEdit.hide();
  }

  clear() {
    this.userDetail = this.formBuilder.group({
      id : [''],
      name : [''],
      email : [''],
      phone: [''],
      password: [''],
      cpassword: ['']
    })
  }
}
