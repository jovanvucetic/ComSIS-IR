import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';
import { WebApiService } from '../utils/web-api-service';
import { Alert } from 'selenium-webdriver';

const TOKEN = 'TOKEN';

@Injectable()
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(localStorage.getItem(TOKEN) != null);

  get isLoggedIn() {
    return this.loggedIn;
  }

  constructor(private router: Router, private api : WebApiService) {}

  login(user: User) {
    this.api.login(
        user.userName,
        user.password
      )
        .subscribe(
          r => {
            if (r.access_token) {
              this.loggedIn.next(true);
              this.setToken(r.access_token);
              this.router.navigateByUrl('/searchPapers');
              return true;
            }
          },
          r => {
            alert("Login failed!");
        });
  }

  logout() {
    this.loggedIn.next(false);
    localStorage.removeItem(TOKEN);
    this.router.navigate(['/home']);
  }

  static getToken() : string {
    return localStorage.getItem(TOKEN);
  }

  setToken(token: string): void {
    localStorage.setItem(TOKEN, token);
  }
}