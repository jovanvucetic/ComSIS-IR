import { Component, OnInit } from '@angular/core';
import { WebApiService } from '../utils/web-api-service';
import { WordTrendModel } from '../utils/response-models/word-trend-model';
import { ChartDataParser } from '../utils/chart-data-parser';
@Component({
  selector: 'app-key-words-by-year',
  templateUrl: './key-words-by-year.component.html',
  styleUrls: ['./key-words-by-year.component.css']
})
export class KeyWordsByYearComponent implements OnInit {

  wordTrend : WordTrendModel[];
  mostFrequentKeyWords : string[];
  noneSearchHappened : boolean;
  keyWord : string;

  multi;
  view: any[] = [1000, 600];
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Word occurencies';
  timeline: boolean = true;
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(private api: WebApiService, private chartDataParser : ChartDataParser) {
  }

  findAndDisplay() {
    this.api.getKeyWordTrend(this.keyWord).subscribe((response : WordTrendModel[]) => {
      this.multi = this.chartDataParser.parseChartData(this.keyWord, response);
    });
  }

  ngOnInit() {
    Object.assign(this, this.multi);
    this.api.getMostFrequentKeyWords().subscribe((response : string[]) => {
       this.mostFrequentKeyWords = response;
     });
  }

}
