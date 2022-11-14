import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-ng2-chart',
  templateUrl: './ng2-chart.component.html',
  styleUrls: ['./ng2-chart.component.css']
})
export class Ng2ChartComponent implements OnInit {
  @Input() selectA: any;
  @Input() selectB: any;

  public lineChartType: ChartType = 'line';

  public lineChartData: ChartData = {
    labels: ['one', 'two', 'three'],
    datasets: [
      {
        label: 'data 1',
        data: [350, 450, 100]
      },
      {
        label: 'data 2',
        data: [100, 250, 50]
      }
    ]
  };

  public lineChartOptions: ChartOptions = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  public barChartType: ChartType = 'bar';

  public barChartData: ChartData = {
    labels: ['one', 'two', 'three'],
    datasets: [
      {
        label: 'data 1',
        data: [350, 450, 100]
      },
      {
        label: 'data 2',
        data: [350, 450, 100]
      }
    ]
  };

  public barChartOptions: ChartOptions = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }

  public doughnutChartType: ChartType = 'doughnut';

  public doughnutChartData: ChartData = {
    labels: ['one', 'two', 'three'],
    datasets: [
      {
        label: 'something',
        data: [350, 450, 100]
      }
    ]
  };

  public doughnutChartOptions: ChartOptions = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  public radarChartOptions: ChartOptions = {
    responsive: true,
  };
  public radarChartLabels: BaseChartDirective["labels"] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public radarChartData: ChartDataset[] = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
  ];
  public radarChartType: ChartType = 'radar';

  constructor() { }

  ngOnInit(): void {
  }

}
