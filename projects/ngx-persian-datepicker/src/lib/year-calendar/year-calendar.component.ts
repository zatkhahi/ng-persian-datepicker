import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dp-year-calendar',
  templateUrl: './year-calendar.component.html',
  styleUrls: ['./year-calendar.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class YearCalendarComponent implements OnInit {

  navLabel = 'سال';

  years = [[1400, 1399, 1398], [1397, 1396, 1395]];

  @Output() onNavHeaderBtnClick: EventEmitter<null> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onLeftNavClick() {
    // const from = this.currentDateView.clone();
    // this.currentDateView = this.currentDateView.clone().subtract(1, 'year');
    // const to = this.currentDateView.clone();
    // this.yearMonths = this.monthCalendarService.generateYear(this.componentConfig, this.currentDateView, this.selected);
    // this.onLeftNav.emit({from, to});
  }

  onRightNavClick() {
    // const from = this.currentDateView.clone();
    // this.currentDateView = this.currentDateView.clone().add(1, 'year');
    // const to = this.currentDateView.clone();
    // this.onRightNav.emit({from, to});
  }

  toggleCalendarMode() {
    this.onNavHeaderBtnClick.emit();
  }

  yearClicked(year: any) {
    console.log(year);
  }
}
