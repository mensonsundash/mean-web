import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { confirmPasswordValidator } from '../../shared/utils/validators.utils';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent implements OnInit{

  resetForm!: UntypedFormGroup;
  submitted: boolean = false;
  token: string='';

  constructor(
    private formBuilder: UntypedFormBuilder,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute
  ){ }

  ngOnInit(): void {

    this.activatedRoute.params
    .subscribe(val=>{
      this.token = val['token'];
    });

    //init form
    this.resetForm = this.formBuilder.group({
      password:['', Validators.required],
      confirm_password: ['', Validators.required]
    },{
      validator: confirmPasswordValidator('password', 'confirm_password')
    });


  }

  get f(){
    return this.resetForm.controls;
  }

  onSubmit(){
    this.submitted = true;

    if(this.resetForm.invalid){
      return;
    }else{
      let resetFormValue = {
        token: this.token,
        password: this.resetForm.value.password
      }
      //api request
      this.authService.reset_password(resetFormValue);
    }
  }

}
