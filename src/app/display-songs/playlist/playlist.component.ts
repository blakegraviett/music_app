import { Component } from '@angular/core';
import { SongsService } from 'src/app/shared/songs.service';
import { Song } from 'src/app/shared/song.model';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css'],
})
export class PlaylistComponent {
  songs: Song[];
  songsSubscription: Subscription;

  constructor(private songsService: SongsService) {}


  ngOnInit() {
    this.songs = this.songsService.getSongs();
    this.songsSubscription = this.songsService.playlistChanged.subscribe((updatedSongs: Song[]) => this.songs = updatedSongs);
  }

  ngOnDestroy() {
    this.songsSubscription.unsubscribe();
  }
}
