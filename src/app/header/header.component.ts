import { Observable, BehaviorSubject } from 'rxjs';
import { AuthService } from './../auth/auth-service';
import { Component, OnInit } from '@angular/core';
import { WebApiService } from '../utils/web-api-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [ './header.component.css' ]
})
export class HeaderComponent implements OnInit {

  isLoggedIn$: BehaviorSubject<boolean>;

  constructor(private authService: AuthService, private api: WebApiService, private router: Router) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    console.log(this.isLoggedIn$.value)
  }

  syncIndex() {
    this.api.indexPapers().subscribe(r => {
      alert("Papers are indexed sucessfully!");
      this.router.navigateByUrl('/searchPapers');
    });
  }

  onLogout() {
    this.authService.logout();
  }

}