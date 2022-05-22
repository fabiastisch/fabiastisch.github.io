import {Injectable, Renderer2, RendererFactory2} from '@angular/core';

export enum Theme {
  light,
  dark

}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;
  private theme: Theme = Theme.dark;

  constructor(rendererFactory2: RendererFactory2) {
    this.renderer = rendererFactory2.createRenderer(null, null);
    this.getColorTheme();
  }

  init() {

    this.renderer.addClass(document.body, Theme[this.theme]);
  }

  update(theme: Theme) {
    console.log('Update Theme to: ' + Theme[theme])
    this.setTheme(theme);
    const lastTheme = theme === Theme.dark ? Theme.light : Theme.dark;
    this.renderer.removeClass(document.body, Theme[lastTheme]);
    this.renderer.addClass(document.body, Theme[theme]);
  }

  isDarkMode() {
    console.log('Is Dark? ' + Theme[this.theme])
    return this.theme === Theme.dark;
  }

  setTheme(theme: Theme) {
    this.theme = theme;
    localStorage.setItem('user-theme', theme.toString());
  }

  getColorTheme() {
    if (localStorage.getItem('user-theme')) {
      console.log('Get User Theme: ' + localStorage.getItem('user-theme'))
      this.theme = localStorage.getItem('user-theme') == '0' ? Theme.light: Theme.dark;
    }else{
      this.theme = Theme.dark;
    }
  }
}
