import { Component, OnInit } from '@angular/core';
import { SongsService } from './shared/songs.service';
import { Song } from './shared/song.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currPage = 'playlist';

  selectedSong: Song;

  constructor(private songsService: SongsService) { }

ngOnInit() {
  return this.songsService.songSelected
    .subscribe(
      (song: Song) => {
        this.selectedSong = song;
      }
    );
}
}
