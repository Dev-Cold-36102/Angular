import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-component-template';
  countdownMsg = '';
  countdownAliasMsg = '';

  finishCountdown() {
    this.countdownMsg = 'Finished!';
  }

  endCountdown(isEnd) {
    if (isEnd) {
      this.countdownAliasMsg = 'Ended!';
    } else {
      this.countdownAliasMsg = '';
    }
  }

  onRateChange(value) {
    console.log(value);
  }
}
