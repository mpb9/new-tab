import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-link',
  standalone: true,
  imports: [],
  templateUrl: './big-link.component.html',
})
export class BigLinkComponent implements OnInit {
  @Input('inputLink') memberLink: string | undefined;

  constructor() {}
  ngOnInit() {
    if (!this.memberLink) {
      console.log('No link provided');
    }

    // this.memberLink = this.memberLink;
  }
}
