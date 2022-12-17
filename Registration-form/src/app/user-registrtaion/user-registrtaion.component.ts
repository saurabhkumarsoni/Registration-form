import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { CustomValidators } from '../shared/custom-validation';

@Component({
  selector: 'app-user-registrtaion',
  templateUrl: './user-registrtaion.component.html',
  styleUrls: ['./user-registrtaion.component.css']
})
export class UserRegistrtaionComponent implements OnInit {
  registrationForm: FormGroup | any
  states = [
    {
      id: 'bh',
      name: 'Bihar'
    },
    {
      id: 'uk',
      name: 'Utrakhand'
    },
    {
      id: 'ka',
      name: 'Karnataka'
    }
  ];

  countries = [
    {
      id: 'us',
      name: 'United States'
    },
    {
      id: 'uk',
      name: 'United Kingdom'
    },
    {
      id: 'ca',
      name: 'Canada'
    }
  ];

  constructor(private fb: FormBuilder, private customValidators: CustomValidators) { }

  get f() {
    return this.registrationForm.controls;
  }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      fname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50), this.customValidators.nameValidator]],
      lname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      password: ['', [Validators.required, this.customValidators.PasswordStrengthValidator]],
      confirmPassword: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      address: this.fb.group({
        street: [''],
        city: [''],
        zip: [''],
        state: [this.states[0].id],
        country: [this.countries[0].id]
      }),
      email: [null, Validators.compose([Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)])],
      phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      dob: ['']
    }, { validator: this.customValidators.confirmedValidator('password', 'confirmPassword') })

  }

  submitData() {
    console.log(this.registrationForm.value)

  }
}
