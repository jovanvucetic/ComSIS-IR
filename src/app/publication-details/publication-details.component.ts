import { Component, OnInit } from '@angular/core';
import { PublicationDetailsModel } from '../utils/response-models/publication-details-model';
import { ActivatedRoute } from '@angular/router';
import { WebApiService } from '../utils/web-api-service';
import { PublicationDetailsResponse } from '../utils/response-models/publication-details-response';

@Component({
  selector: 'app-publication-details',
  templateUrl: './publication-details.component.html',
  styleUrls: ['./publication-details.component.css']
})
export class PublicationDetailsComponent implements OnInit {

  publication: PublicationDetailsModel;

  constructor(private activatedRoute: ActivatedRoute, private api: WebApiService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {  
      console.log(param['id']);
      this.api.getPublicationDetails(param['id']).subscribe((response : PublicationDetailsResponse) => {
        this.publication = response.publication;
      });
    });  
  }
}
