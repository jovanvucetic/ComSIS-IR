import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreatePaperComponent } from './create-paper/create-paper.component';
import { AuthGuard } from './auth/auth-guard';
import { HomeComponent } from './home/home.component';
import { SearchPapersComponent } from './search-papers/search-papers.component';
import { RegisterUserComponent } from './register-user/register-user.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'searchPapers', component: SearchPapersComponent },
  { path: 'createPaper', component: CreatePaperComponent, canActivate: [AuthGuard] },
  { path: 'registerUser', component: RegisterUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }