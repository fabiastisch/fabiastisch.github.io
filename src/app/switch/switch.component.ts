import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {
  @Input()
  scale = 0.7;
  @Input()
  checked!: boolean;
  @Output()
  checkedChange = new EventEmitter<boolean>();

  scaleVal: any = 'scale(' + this.scale + ',' + this.scale + ')';

  OnChanged() {
    this.checkedChange.emit(this.checked)
  }

  ngOnInit(): void {
  }
}
