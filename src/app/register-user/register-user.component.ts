import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from '../utils/must-match-filter';
import { RegisterUserRequest } from '../utils/request-models/register-user-request';
import { WebApiService } from '../utils/web-api-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  registerForm: FormGroup
  submitted : boolean

  constructor(private formBuilder: FormBuilder, private api : WebApiService, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
        validator: MustMatch('password', 'confirmPassword')
    });
  }

  get fields() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      if (this.registerForm.invalid) {
          return;
      }

      let registerUserRequest = new RegisterUserRequest(this.fields["username"].value, this.fields["password"].value);
      this.api.registerUser(registerUserRequest).subscribe(r =>  {
        alert("You have registered successfully");
        this.router.navigateByUrl('/login');
      });
  }

}
