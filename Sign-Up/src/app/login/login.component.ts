import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {RegisterFinalComponent} from '../register-final/register-final.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  @ViewChild(RegisterFinalComponent) user: RegisterFinalComponent;

  constructor(private fb: FormBuilder) {
  }


  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    console.log(this.loginForm);
    if (this.loginForm.value.email === this.user.registerForm.value.email) {
      alert('match email');
    }
  }

}
