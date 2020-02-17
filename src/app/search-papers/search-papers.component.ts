import { Component, OnInit, COMPILER_OPTIONS } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WebApiService } from '../utils/web-api-service';
import { Constants } from '../utils/constants';

@Component({
  selector: 'app-search-papers',
  templateUrl: './search-papers.component.html',
  styleUrls: ['./search-papers.component.css']
})
export class SearchPapersComponent implements OnInit {
  constructor(private api : WebApiService ) { 
    this.noneSearchHappened = true;
  }

  papers;
  isSuccessful: boolean;
  noneSearchHappened : boolean;
  searchByProperties = [Constants.AbstractSearchProperty, Constants.AuthorsSearchProperty, 
    Constants.TitleSearchProperty, Constants.KeyWordsPropery, Constants.YearSearchProperty, Constants.WordsSearchProperty];

  private exactMatch = true;
  searchProperty = this.searchByProperties[0];

  searchAndDisplay(query: string) {
    this.search(query).subscribe((data) => {
      this.noneSearchHappened = false;
      this.displayData(data);
    });
  }

  authorDetails(authorId : string) {
    window.open("/authorDetails");
  }

  displayData(data) {
    this.isSuccessful = data["successful"];
    this.papers = data["papers"];
  }

  search(query: string) {
    console.log(this.searchProperty);
    return this.api.searchForPapers(this.prepareRequestUrl(query));
  }

  setSearchProperty(property) {
    this.searchProperty = property;
  }

  changeExactMatch() {
    this.exactMatch = !this.exactMatch;
  }

  getUrlForSearchProperty() {
    switch (this.searchProperty) {
      case Constants.AbstractSearchProperty:
        return Constants.SearchByAbstractUrl;
      case Constants.AuthorsSearchProperty:
        return Constants.SearchByAuthorUrl;
      case Constants.TitleSearchProperty:
        return Constants.SearchByTitleUrl;
      case Constants.YearSearchProperty:
        return Constants.SearchByYearUrl;
      case Constants.WordsSearchProperty:
        return Constants.SearchByWordsUrl;
      case Constants.KeyWordsPropery:
        return Constants.SearchByKeyWords;
    }
  }

  prepareRequestUrl(query: string) {
    var requestUrl = this.getUrlForSearchProperty() + query;
    if (!this.exactMatch) {
      requestUrl += "*"
    }
    return requestUrl;
  }

  ngOnInit() {
    
  }

}
