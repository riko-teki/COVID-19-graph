import { Component, OnInit } from '@angular/core';
import { Chart, ChartDataSets, ChartType } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { HttpClientService } from 'src/app/services/http-client.service';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
  // https://qiita.com/yuuton8823/items/5b943c57210ea3417e6b
  // data
  lineChartData: ChartDataSets[] =[
    {
      data: [100, 60, 90, 0, 80, 50],
      label: '新規陽性者数',
    },
  ] 

  // ラベル
  lineChartLabels: Label[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  lineChartOptions = {
    responsive: true,
  };

  // 色
  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,255,0.28)',
    },
  ];

  lineChartLegend = true; // グラフの属性ラベル
  lineChartPlugins = [];
  lineChartType: ChartType = 'line'; // グラフの種類

  constructor(private httpClientService: HttpClientService) {}

  ngOnInit(): void {
    this.httpClientService
      .getCOVID19Positive()
      .subscribe((datas) => {
        console.log(datas)
        const nums: number[] = [];
        const labelDate: string[] = [];
       for (const data of datas) {
         nums.push(data.adpatients)
         labelDate.push(data.date.toString())
       }
       this.lineChartData[0].data = nums;
       this.lineChartLabels = labelDate;
      });
  }
}
