import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplaySongsComponent } from './display-songs/display-songs.component';
import { AddSongsComponent } from './add-songs/add-songs.component';
import { HeaderComponent } from './header/header.component';
import { PlayYoutubeComponent } from './play-youtube/play-youtube.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplaySongsComponent,
    AddSongsComponent,
    HeaderComponent,
    PlayYoutubeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
