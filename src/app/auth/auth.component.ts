import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  isSigningIn = true;

  constructor(private authService: AuthService) {}

signInForm = new FormGroup({
  email: new FormControl('', Validators.required),
  password: new FormControl('', Validators.required)
})

onSubmitSignIn() {
  console.log(this.signInForm.value.email)
  console.log(this.signInForm.value.password)
  this.signInForm.reset();
}

onSubmitSignUp() {
  const email = this.signInForm.value.email
  const password = this.signInForm.value.password

  this.authService.signUp(email, password).subscribe(
    resData => {
    console.log(resData);
  },
  error => {
    console.log(error);
  }
  );


  this.signInForm.reset();
}

}
