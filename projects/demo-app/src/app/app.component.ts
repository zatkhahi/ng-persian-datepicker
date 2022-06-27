import { Component } from '@angular/core';
import * as moment from 'jalali-moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-app';
  dateObject = moment('1395-11-22','jYYYY,jMM,jDD');
}
