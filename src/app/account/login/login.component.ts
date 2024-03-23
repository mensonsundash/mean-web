import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  loginForm!: UntypedFormGroup;
  submitted: boolean = false;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private authService: AuthService
    ) {

  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['',[Validators.required]]
    })
  }

  get f(){
    return this.loginForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.loginForm.value)
    if(this.loginForm.invalid){
      return;
    }else{
      // call api requese
      this.authService.login(this.loginForm.value);
    }
  }

}
