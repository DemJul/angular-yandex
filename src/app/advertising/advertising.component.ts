import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertising',
  templateUrl: './advertising.component.html',
  styleUrls: ['./advertising.component.less']
})
export class AdvertisingComponent implements OnInit {
  fullImagePath: string;

  constructor() {
    this.fullImagePath = '/assets/images/advertising.PNG';
  }

  ngOnInit(): void {
  }

}
