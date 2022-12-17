
import {FormControl, AbstractControl, ValidationErrors, ValidatorFn, FormGroup}  from '@angular/forms'


  export class CustomValidators {
    nameValidator(control: FormControl): { [key: string]: boolean } | any {
        const nameRegexp: RegExp = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        if (control.value && nameRegexp.test(control.value)) {
           return { invalidName: true };
        }
    }

   PasswordStrengthValidator(control: AbstractControl): ValidationErrors | null {

        let value: string = control.value || '';
      
        if (!value) {
          return null
        }
      
        let upperCaseCharacters = /[A-Z]+/g
        if (upperCaseCharacters.test(value) === false) {
          return { passwordStrength: `Upper case required` };
        }
      
        let lowerCaseCharacters = /[a-z]+/g
        if (lowerCaseCharacters.test(value) === false) {
          return { passwordStrength: `lower case required` };
        }
      
      
        let numberCharacters = /[0-9]+/g
        if (numberCharacters.test(value) === false) {
          return { passwordStrength: `number required` };
        }
      
        let specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
        if (specialCharacters.test(value) === false) {
          return { passwordStrength: `Special char required` };
        }
        return null;
    }

    passwordValidator(control: AbstractControl): {[key:string]: boolean} | null{
        const password = control.get('password');
        const confirmPassword = control.get('confirmPassword');
        if(password?.pristine || confirmPassword?.pristine){
            return null;
        }
        console.log(password, confirmPassword)
        return password && confirmPassword && password.value != confirmPassword.value ?
        { 'mustMatch': true} : null;
    
    }


confirmedValidator(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors['confirmedValidator']) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}

    

    
}

