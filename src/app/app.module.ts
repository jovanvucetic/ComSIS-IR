import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material/app-material-module';
import { MatPaginatorModule, MatTableModule, MatExpansionModule } from "@angular/material";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAuthorComponent } from './create-author/create-author.component';
import { CreatePaperComponent } from './create-paper/create-paper.component';
import { SearchPapersComponent } from './search-papers/search-papers.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth/auth-service';
import { AuthGuard } from './auth/auth-guard';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { Constants } from './utils/constants';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { PublicationDetailsComponent } from './publication-details/publication-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateAuthorComponent,
    CreatePaperComponent,
    SearchPapersComponent,
    RegisterUserComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    AuthorDetailsComponent,
    PublicationDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatTableModule, 
    HttpClientModule,
    NgMultiSelectDropDownModule
  ],
  providers: [ AuthService, AuthGuard, Constants ],
  bootstrap: [AppComponent]
})
export class AppModule { }
