import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginResultModel} from './response-models/login-result-model'
import { Constants } from './constants';
import { CreateAuthorRequest } from './request-models/create-author-request';
import { AuthService } from '../auth/auth-service';
import { CreatePaperRequest } from './request-models/create-paper-request';
import { RegisterUserRequest } from './request-models/register-user-request';


const TOKEN = 'TOKEN';

@Injectable({
  providedIn: 'root'
})
export class WebApiService {

  constructor(private http: HttpClient, private constants: Constants) {  }

  login(username: string, password: string) : Observable<LoginResultModel>{
    const headers = {
      'Authorization': 'Basic ' + btoa(Constants.ClientId + ':' + Constants.ClientSecret),
      'Content-type': 'application/x-www-form-urlencoded'
    }
    
    const body = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password');

    return this.http.post<LoginResultModel>(this.createApiUrl(Constants.AuthenticationUrl),  body, {headers});
  }

  searchForPapers(query : string) : Observable<Object> {
    let requestUrl = this.createApiUrl(query);
    return this.http.get(requestUrl);
  }

  createAuthor(createAuthorRequest : CreateAuthorRequest) : Observable<Object> {
     let requestUrl = this.createApiUrl(Constants.CreateAuthorUrl);
     let headers = this.getAuthorizationHeader();
     return this.http.post(requestUrl, createAuthorRequest, { headers });
  }

  createPaper(createPaperRequest : CreatePaperRequest) : Observable<Object> {
    let requestUrl = this.createApiUrl(Constants.CreatePaperUrl);
    let headers = this.getAuthorizationHeader();
    return this.http.post(requestUrl, createPaperRequest, {headers})
  }

  getAllAuthors() : Observable<Object> {
    let requestUrl = this.createApiUrl(Constants.AllAuthorsUrl);
    let headers = this.getAuthorizationHeader();
    return this.http.get(requestUrl, {headers})
  }

  indexPapers() {
    let headers = this.getAuthorizationHeader();
    var requestUrl = this.createApiUrl(Constants.IndexPapersUrl);
    return this.http.get(requestUrl, {headers});
  }

  registerUser(registerUserRequest : RegisterUserRequest) : Observable<Object> {
     let requestUrl = this.createApiUrl(Constants.RegisterUserUrl);
     return this.http.post(requestUrl, registerUserRequest);
  }

  getAuthorDetails(authorId : string) {
    let requestUrl = this.createApiUrl(Constants.AuthorByIdUrl) + authorId;
    return this.http.get(requestUrl);
  }

  getDblpPublicationsForAuthor(authorName: string) {
    let requestUrl = this.createApiUrl(Constants.DblpPublicationsByAuthorsName) + authorName;
    return this.http.get(requestUrl);
  }

  getPublicationDetails(publicationId: string) {
    let requestUrl = this.createApiUrl(Constants.PublicationDetailsUrl) + publicationId;
    return this.http.get(requestUrl);
  }

  private createApiUrl(endpointUrl : string) {
      return Constants.ApplicationUrl + endpointUrl;
  }

  private getAuthorizationHeader() : HttpHeaders {
    return new HttpHeaders({"Authorization": "Bearer " + localStorage.getItem(TOKEN)})
  }
}
