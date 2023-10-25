import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DisplaySongsComponent } from './display-songs/display-songs.component';
import { AddSongsComponent } from './add-songs/add-songs.component';
import { HeaderComponent } from './header/header.component';
import { PlayYoutubeComponent } from './display-songs/playlist/play-youtube/play-youtube.component';
import { SongItemComponent } from './display-songs/playlist/song-item/song-item.component';
import { PlaylistComponent } from './display-songs/playlist/playlist.component';
import { TutorialPhotosComponent } from './add-songs/tutorial-photos/tutorial-photos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DisplaySongsComponent,
    AddSongsComponent,
    HeaderComponent,
    PlayYoutubeComponent,
    SongItemComponent,
    PlaylistComponent,
    TutorialPhotosComponent ,
  ],
  imports: [
    BrowserModule, AppRoutingModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
