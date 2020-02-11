import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebApiService } from '../utils/web-api-service';
import { AuthorDetailsResponse } from '../utils/response-models/author-details-response';
import { AuthorDetailsModel } from '../utils/response-models/author-details-model';
import { DblpPublicationModel } from '../utils/response-models/dblp-publication-model';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {

  author: AuthorDetailsModel = new AuthorDetailsModel();
  publications: DblpPublicationModel[]; 

  constructor(private activatedRoute: ActivatedRoute, private api: WebApiService ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {  
        this.api.getAuthorDetails(param['id']).subscribe((response : AuthorDetailsResponse) => {
            this.author = response.author;
            this.api.getDblpPublicationsForAuthor(response.author.fullName).subscribe((response : DblpPublicationModel[]) => {
              this.publications = response;
            });
        });
      });  
     }  
  }
