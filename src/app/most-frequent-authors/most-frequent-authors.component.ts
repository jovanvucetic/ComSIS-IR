import { Component, OnInit } from '@angular/core';
import { WebApiService } from '../utils/web-api-service';
import { AuthorStatisticsModel } from '../utils/response-models/author-statistics-model';

@Component({
  selector: 'app-most-frequent-authors',
  templateUrl: './most-frequent-authors.component.html',
  styleUrls: ['./most-frequent-authors.component.css']
})
export class MostFrequentAuthorsComponent implements OnInit {

  authorsStatistics : AuthorStatisticsModel[]

  constructor(private api: WebApiService) { }

  ngOnInit() {
      this.api.getMostFrequentAuthors().subscribe((response : AuthorStatisticsModel[]) => {
          this.authorsStatistics = response;
      });
   
  }

}
