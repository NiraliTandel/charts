import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'charts';
  selectA = 'Ngx Charts';
  selectB = 'Line Chart';

  public libraries = [
    'Ngx Charts',
    'Ng2 Charts',
    'High Charts',
  ];

  public types = [
    'Line Chart',
    'Bar Chart',
    'Pie Chart',
    'Area Chart',
  ];

  constructor() { }

}
