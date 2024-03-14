import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

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
  ) {

  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      full_name:['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['',Validators.required],
      confirm_password: ['', Validators.required]
    })
  }

  get f(){
    return this.registerForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.registerForm.value)
    if(this.registerForm.invalid){
      return;
    }else{
      // call api requese
    }
  }
}
