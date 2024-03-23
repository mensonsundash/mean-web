import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { confirmPasswordValidator } from '../../shared/utils/validators.utils';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{
  registerForm!: UntypedFormGroup;
  submitted: boolean = false;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private authService: AuthService
  ) {

  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['',Validators.required],
      confirm_password: ['', Validators.required]
    },{
      validator: confirmPasswordValidator('password', 'confirm_password')
    })
  }

  get f(){
    return this.registerForm.controls;
  }

  onSubmit(){
    this.submitted = true;

    if(this.registerForm.invalid){
      return;
    }else{
      // call api requese
      this.authService.register(this.registerForm.value);
    }
  }
}
