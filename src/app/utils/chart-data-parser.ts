import { Injectable } from '@angular/core';
import { LineChartModel } from './response-models/line-chart-model';
import { LineChartPointModel } from './response-models/line-chart-point-model';
import { WordTrendModel } from './response-models/word-trend-model';

@Injectable({
    providedIn: 'root'  
})

export class ChartDataParser {
    parseChartData(word : string, trend : WordTrendModel[]) {
        let lineChartModel = new LineChartModel(word);
        trend.forEach(element => {
            lineChartModel.series.push(new LineChartPointModel(element.year.toString(), element.frequency.toString()));
        });

        let response = [];
        response.push(lineChartModel);
        return response;
      }
}