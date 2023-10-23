import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DisplaySongsComponent } from './display-songs/display-songs.component';
import { AddSongsComponent } from './add-songs/add-songs.component';
import { HeaderComponent } from './header/header.component';
import { PlayYoutubeComponent } from './play-youtube/play-youtube.component';
import { SongItemComponent } from './display-songs/song-item/song-item.component';
import { PlaylistComponent } from './display-songs/playlist/playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplaySongsComponent,
    AddSongsComponent,
    HeaderComponent,
    PlayYoutubeComponent,
    SongItemComponent,
    PlaylistComponent ,
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
