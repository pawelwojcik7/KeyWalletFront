import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.less']
})
export class TabComponent {
  @Input()
  ngModel: any;
  @Output()
  ngModelChange = new EventEmitter<any>();
  @Input()
  value: any

  clickTab(): void {

    this.ngModel = this.value;
    this.ngModelChange.emit(this.value);
  }
}
