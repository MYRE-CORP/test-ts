import { Component } from '@angular/core';

import { KpiTrend } from '../../lib/kpi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: number = KpiTrend.Up;
}
