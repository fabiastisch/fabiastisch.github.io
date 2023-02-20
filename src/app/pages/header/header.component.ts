import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Theme, ThemeService} from "../../theme.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public checked: boolean = false;

  constructor(public route: Router, private themeService: ThemeService) {
  }

  ngOnInit(): void {
    this.checked = this.themeService.isDarkMode()
  }

  SwitchChanged(event: boolean) {
    this.themeService.update(+this.checked)
  }
}
