import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadlineComponent } from './headline/headline.component';
import { AdvertisingComponent } from './advertising/advertising.component';
import { SearchComponent } from './search/search.component';
import { NotifComponent } from './notif/notif.component';
import { NotifEmailComponent } from './notif-email/notif-email.component';
import { MoreInfoComponent } from './more-info/more-info.component';
import { NewsComponent } from './news/news.component';
import { WthTrafComponent } from './wth-traf/wth-traf.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ListEventsComponent } from './list-events/list-events.component';
import { NewsCurrencyComponent } from './news-currency/news-currency.component';
import { WidgetsComponent } from './widgets/widgets.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadlineComponent,
    AdvertisingComponent,
    SearchComponent,
    NotifComponent,
    NotifEmailComponent,
    MoreInfoComponent,
    NewsComponent,
    WthTrafComponent,
    DropdownComponent,
    ListEventsComponent,
    NewsCurrencyComponent,
    WidgetsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
