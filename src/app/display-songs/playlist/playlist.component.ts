import { Component } from '@angular/core';
import { SongsService } from 'src/app/services/playlist_one.service';
import { Song } from 'src/app/shared/song.model';
import { Subscription } from 'rxjs';
import { PlaylistTwoService } from 'src/app/services/playlist_two.service';
@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css'],
})
export class PlaylistComponent {
  playlistOne: Song[];
  playlistTwo: Song[];
  songsSubscription: Subscription;

  constructor(private songsService: SongsService, private playlistTwoService: PlaylistTwoService) {}


  ngOnInit() {
    this.playlistOne = this.songsService.getSongs();
    this.playlistTwo =this.playlistTwoService.getSongs();
    this.songsSubscription = this.songsService.playlistChanged.subscribe((updatedSongs: Song[]) => this.playlistOne = updatedSongs);
    this.songsSubscription = this.playlistTwoService.playlistChanged.subscribe((updatedSongs: Song[]) => this.playlistTwo = updatedSongs);
  }

  ngOnDestroy() {
    this.songsSubscription.unsubscribe();
  }
}
