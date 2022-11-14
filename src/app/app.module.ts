import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HighchartsChartModule } from 'highcharts-angular';
import { NgChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighChartComponent } from './high-chart/high-chart.component';
import { Ng2ChartComponent } from './ng2-chart/ng2-chart.component';
import { NgxChartComponent } from './ngx-chart/ngx-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NgxChartComponent,
    Ng2ChartComponent,
    HighChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxChartsModule,
    NgChartsModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
