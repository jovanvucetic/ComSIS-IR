import { LineChartPointModel } from './line-chart-point-model';

export class LineChartModel {
    name: String;
    series: LineChartPointModel[];

    constructor(name : string) {
        this.name = name;
        this.series = [];
    }
}