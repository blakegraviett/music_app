import { Component } from '@angular/core';
import { SongsService } from 'src/app/shared/songs.service';
import { Song } from 'src/app/shared/song.model';
@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css'],
})
export class PlaylistComponent {
  songs: Song[];

  constructor(private songsService: SongsService) {}


  ngOnInit() {
    this.songs = this.songsService.getSongs();
  }
}
