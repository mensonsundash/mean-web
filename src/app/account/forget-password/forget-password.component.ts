import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent implements OnInit {
  forgetForm!: UntypedFormGroup;
  submitted: boolean = false;

  constructor(
    private formbuilder: UntypedFormBuilder,
    private authService: AuthService
  ){

  }

  ngOnInit(): void {
    this.forgetForm = this.formbuilder.group({
      email:['', Validators.compose([Validators.required, Validators.email])]
    })
  }

  get f(){
    return this.forgetForm.controls
  }

  onSubmit() {
    this.submitted = true;

    if(this.forgetForm.invalid){
      return;
    }else{
      //call api request
      console.log(this.forgetForm.value);
      this.authService.forget_password(this.forgetForm.value);

    }
  }
}
