import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {

  visibility: boolean = false;
    // переключаем переменную
  onhover(): void{
      this.visibility=!this.visibility;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
