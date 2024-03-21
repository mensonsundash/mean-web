import { FormGroup } from "@angular/forms"

export const confirmPasswordValidator = (controlName: string, controlNameToMatch: string) => {
  return (fromGroup: FormGroup) => {
    let control = fromGroup.controls[controlName];
    let controlToMatch = fromGroup.controls[controlNameToMatch];
    if(controlToMatch.errors && !controlToMatch.errors['confirmPasswordValidtor']){
      return;
    }
    if(control.value !== controlToMatch.value){
      controlToMatch.setErrors({ confirmPasswordValidator: true});
    }else{
      controlToMatch.setErrors(null);
    }
  }
}
