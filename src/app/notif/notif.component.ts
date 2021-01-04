import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notif',
  templateUrl: './notif.component.html',
  styleUrls: ['./notif.component.less']
})
export class NotifComponent implements OnInit {

  fullImagePath: string;

  constructor() {
    this.fullImagePath = '/assets/images/coronavirus.PNG';
  }

  ngOnInit(): void {
  }

}
