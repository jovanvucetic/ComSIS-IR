import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreatePaperComponent } from './create-paper/create-paper.component';
import { AuthGuard } from './auth/auth-guard';
import { HomeComponent } from './home/home.component';
import { SearchPapersComponent } from './search-papers/search-papers.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { PublicationDetailsComponent } from './publication-details/publication-details.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'searchPapers', component: SearchPapersComponent },
  { path: 'createPaper', component: CreatePaperComponent, canActivate: [AuthGuard] },
  { path: 'registerUser', component: RegisterUserComponent},
  { path: 'authorDetails/:id', component: AuthorDetailsComponent},
  { path: 'publicationDetails/:id', component: PublicationDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }