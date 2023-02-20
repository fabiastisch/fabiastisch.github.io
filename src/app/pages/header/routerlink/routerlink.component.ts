import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-routerlink',
  templateUrl: './routerlink.component.html',
  styleUrls: ['./routerlink.component.scss']
})
export class RouterlinkComponent implements OnInit {
  @Input()
  name: string | undefined;
  @Input()
  link: string | undefined;

  constructor() {
  }

  ngOnInit(): void {

  }

}
