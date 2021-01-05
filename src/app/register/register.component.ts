import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'app/service/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted=false;
  userForm;
  hide = true;
  constructor(private authServices: AuthServiceService) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({ 
      firstName  :new FormControl('', [Validators.required]),
      lastName :new FormControl('', [Validators.required]),
      telp :new FormControl('', [Validators.required]),
      adresse :new FormControl('', [Validators.required]),
      email  :new FormControl('', [Validators.required]),
      password  :new FormControl('', [Validators.required]),
   
    });
  }

  save(){
   this.submitted=true;
    if (this.userForm.invalid) {
      return ;  
    } 
    this.authServices.addUser(this.userForm.value);
    
  }
}