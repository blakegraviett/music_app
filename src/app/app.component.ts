import { Component, OnInit } from '@angular/core';
import { SongsService } from './services/playlist_one.service';
import { Song } from './shared/song.model';
import { PlaylistTwoService } from './services/playlist_two.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currPage = 'playlist';

  selectedSong: Song;

  constructor(private songsService: SongsService, private playlistTwoService: PlaylistTwoService) { }

ngOnInit() {
    this.songsService.pullLocalStorage();
    this.playlistTwoService.pullLocalStorage();
}


}
