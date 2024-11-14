import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { LinkGroupComponent } from './link-group/link-group.component';
import { BigLinkComponent } from './link/big-link/big-link.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BigLinkComponent, LinkGroupComponent, BannerComponent, HeaderComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'new-tab';
}
