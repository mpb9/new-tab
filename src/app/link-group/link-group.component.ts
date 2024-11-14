import { Component } from '@angular/core';
import { SmallLinkComponent } from '../link/small-link/small-link.component';

@Component({
  selector: 'app-link-group',
  standalone: true,
  imports: [SmallLinkComponent],
  templateUrl: './link-group.component.html',
})
export class LinkGroupComponent {}
