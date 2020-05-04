import {Component, OnInit, Input, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  private Intervalid = 0;
  message = '';
  remainingTime: number;

  @Input()
  seconds = 11;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
  }

  clearTimer() {}
  start() {}
  stop() {}
  reset() {}
  private countDown() {}

}
