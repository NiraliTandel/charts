import { Component, Input, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { multi, single } from './data';

@Component({
  selector: 'app-ngx-chart',
  templateUrl: './ngx-chart.component.html',
  styleUrls: ['./ngx-chart.component.css']
})
export class NgxChartComponent implements OnInit {
  @Input() selectA: any;
  @Input() selectB: any;
  public single!: any[];
  public multi!: any[];
  public view: [number, number] = [700, 400];
  public animations: boolean = true;
  public gradient = false;
  public showXAxis = true;
  public showYAxis = true;
  public showLegend = true;
  public showLabels: boolean = true;
  public showXAxisLabel = true;
  public xAxisLabel!: "Years";
  public showYAxisLabel = true;
  public yAxisLabel!: "Country";
  public timeline: boolean = true;
  public isDoughnut: boolean = false;
  public legendPosition: string = 'below';
  public graphDataChart!: any[];
  public colorScheme: Color = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
    group: ScaleType.Ordinal,
    selectable: true,
    name: 'Customer Usage',
  };

  constructor() {
    Object.assign(this, { multi }),
      Object.assign(this, { single })
  }

  ngOnInit(): void {
  }

  public onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  public onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  public onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
