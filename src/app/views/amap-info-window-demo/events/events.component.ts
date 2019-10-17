import { Component, OnInit } from '@angular/core';

declare const require: any;

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  demo_md_html = require('!!html-loader!./events.component.html');
  demo_md_ts = require('!!raw-loader!./events.component.ts');

  open = true;

  constructor() {}

  ngOnInit() {}

  onInfoWindowEvent(event: any, type: string) {
    console.log('info-window event:', type, event);
  }
}
