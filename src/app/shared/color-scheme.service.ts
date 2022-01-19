import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ColorSchemeService {
  public isDark = this.cookieService.get('is-dark-color-scheme') === 'true';
  private renderer: Renderer2;

    constructor(
      private rendererFactory: RendererFactory2,
      private cookieService: CookieService
    ) {
        this.renderer = rendererFactory.createRenderer(null, null);
        this.setColorScheme(this.isDark);
    }

  public changeColorScheme() {
    this.isDark = !this.isDark;
    this.cookieService.set('is-dark-color-scheme', this.isDark.toString());
    this.setColorScheme(this.isDark);
  }

  public setColorScheme(isDark: boolean): void {
    if (!isDark) {
      this.renderer.removeClass(document.body, 'dark-theme');
    } else {
      this.renderer.addClass(document.body, 'dark-theme');
    }
  }
}
