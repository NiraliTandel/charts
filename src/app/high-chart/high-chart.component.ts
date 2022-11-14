import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from "highcharts";
import exporting from 'highcharts/modules/exporting';
import HC_exportData from 'highcharts/modules/export-data';
import HC_dilldown from 'highcharts/modules/drilldown';
exporting(Highcharts);
HC_exportData(Highcharts);
HC_dilldown(Highcharts);

@Component({
  selector: 'app-high-chart',
  templateUrl: './high-chart.component.html',
  styleUrls: ['./high-chart.component.css']
})
export class HighChartComponent implements OnInit {
  @Input() selectA: any;
  @Input() selectB: any;

  public Highcharts: typeof Highcharts = Highcharts;

  public lineChartOptions: Highcharts.Options = {
    title: {
      text: "Line Chart"
    },
    credits: {
      enabled: false
    },
    series: [
      {
        type: "line",
        data: [1, 2, 3, 4, 5]
      }
    ]
  };

  public barChartOptions: Highcharts.Options = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Bar Chart',
    },
    xAxis: {
      type: 'category',
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Country',
      type: 'column',
      colorByPoint: true,
      data: [
        {
          name: 'ASIA',
          y: 5,
          color: '#4572A7',
          drilldown: 'ASIA'
        },
        {
          name: 'EUROPE',
          y: 2,
          color: '#AA4643',
          drilldown: 'EUROPE'
        },
        {
          name: 'AMERICA',
          y: 4,
          color: '#89A54E',
          drilldown: 'AMERICA'
        },
        {
          name: 'AFRICA',
          y: 2,
          color: '#80699B',
          drilldown: 'AFRICA'
        },
        {
          name: 'OCEANIA',
          y: 2,
          color: '#3D96AE',
          drilldown: 'OCEANIA'
        }
      ]
    }],
    drilldown: {
      series: [
        {
          name: 'ASIA',
          id: 'ASIA',
          type: 'column',
          data: [
            ['INDIA', 4],
            ['CHINA', 3],
            ['JAPAN', 2]
          ]
        },
        {
          name: 'EUROPE',
          id: 'EUROPE',
          type: 'column',
          data: [
            ['DENMARK', 5],
            ['FRANCE', 7],
            ['GERMANY', 2],
          ]
        },
        {
          name: 'AMERICA',
          id: 'AMERICA',
          type: 'column',
          data: [
            ['CANADA', 1],
            ['USA', 2],
            ['BRAZIL', 5],
          ]
        },
        {
          name: 'AFRICA',
          id: 'AFRICA',
          type: 'column',
          data: [
            ['EGYPT', 3],
            ['ZAMBIA', 1],
            ['ZIMBABWE', 2]
          ]
        },
        {
          name: 'OCEANIA',
          id: 'OCEANIA',
          type: 'column',
          data: [
            ['AUSTRALIA', 4],
            ['ISLAND', 3],
            ['ZEALAND', 2]
          ]
        }
      ]
    }
  };

  public pieChartOptions: Highcharts.Options = {
    chart: {
      type: "pie",
    },
    title: {
      text: "Pie Chart"
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series: [
      {
        type: "pie",
        data: [1, 2, 3, 4, 5]
      }
    ]
  };

  public areaChartOptions: Highcharts.Options = {
    title: {
      text: "Area Chart"
    },
    credits: {
      enabled: false
    },
    series: [
      {
        type: "area",
        data: [1, 2, 3, 4, 5]
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
