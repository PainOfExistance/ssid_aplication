import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.css']
})
export class SuccessPageComponent {
  @Output() newApplication = new EventEmitter();

  submitNewApplication() {
    this.newApplication.emit();
  }
}
