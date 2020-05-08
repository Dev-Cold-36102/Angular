import {Component, OnInit} from '@angular/core';
import {DateUtilService} from '../date-util.service';

@Component({
  selector: 'app-timesline',
  templateUrl: './timesline.component.html',
  styleUrls: ['./timesline.component.css']
})
export class TimeslineComponent implements OnInit {

  output = '';

  constructor(private dateUtilService: DateUtilService) {
  }

  ngOnInit() {
  }

  onChange(value) {
    this.output = this.dateUtilService.getDiffToNow(value);
  }
}
