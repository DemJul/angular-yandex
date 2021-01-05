import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wth-traf',
  templateUrl: './wth-traf.component.html',
  styleUrls: ['./wth-traf.component.less']
})
export class WthTrafComponent implements OnInit {

  visibilityWth: boolean = false;
  visibilityTraf: boolean = false;
    // переключаем переменную
  onhoverWth(): void{
      this.visibilityWth=!this.visibilityWth;
  }

  onhoverTraf(): void{
    this.visibilityTraf=!this.visibilityTraf;
  }

  fullImagePath: string;

  constructor() {
    this.fullImagePath = '/assets/images/weather.png';
  }

  ngOnInit(): void {
  }

}
