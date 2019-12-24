import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateAuthorRequest } from '../utils/request-models/create-author-request';
import { Constants } from '../utils/constants';
import { WebApiService } from '../utils/web-api-service';

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.css']
})
export class CreateAuthorComponent implements OnInit {

  constructor(private api : WebApiService) { }

  ngOnInit() {
  }

  createAuthor(authorsName: string) {
    if (!authorsName.length) {
      return;
    }

    let createAuthorRequest = new CreateAuthorRequest(authorsName);
    this.api.createAuthor(createAuthorRequest).subscribe((data) => this.displaydata(data));
  }

  displaydata(data) {
    alert('Author created sucessfully with id: \n\n' + JSON.stringify(data));
  }

}
