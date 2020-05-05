import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-countdown-timer-event-alias',
  templateUrl: './countdown-timer-event-alias.component.html',
  styleUrls: ['./countdown-timer-event-alias.component.scss']
})
export class CountdownTimerEventAliasComponent implements OnInit, OnChanges, OnDestroy {
  private intervalId = 0;
  message = '';
  remainingTime: number;

  @Input()
  seconds = 11;

  @Output('timeout')
  finish = new EventEmitter<boolean>();

  ngOnChanges(changes: SimpleChanges) {
    if ('second' in changes) {
      let v = changes.seconds.currentValue;
      v = typeof v === 'undefined' ? 11 : v;
      const vFixed = Number(v);
      this.seconds = Number.isNaN(vFixed) ? 11 : vFixed;
    }
  }

  clearTime() {
    clearInterval(this.intervalId);
  }


  ngOnDestroy() {
    this.clearTime();
  }

  start() {
    this.finish.emit(false);
    this.coutDown();
    if (this.remainingTime <= 0) {
      this.remainingTime = this.seconds;
    }
  }

  stop() {
    this.clearTime();
    this.message = `pause at ${this.remainingTime} s`;
  }

  reset() {
    this.clearTime();
    this.remainingTime = this.seconds;
    this.message = 'click start';
  }

  ngOnInit(){
    this.reset();
    this.start();
  }

  private coutDown() {
    this.clearTime();
    this.intervalId = window.setInterval(() => {
      this.remainingTime -= 1;
      if (this.remainingTime === 0) {
        this.message = 'time out';
        this.clearTime();
        this.finish.emit(true);
      } else {
        this.message = `running-${this.remainingTime} s`;
      }
    }, 1000);
  }

}
