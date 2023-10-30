import { Component , Input} from '@angular/core';
import { Song } from '../../../shared/song.model';
import { SongsService } from '../../../services/playlist_one.service';
import { DomSanitizer, SafeResourceUrl, Title } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PlaylistTwoService } from 'src/app/services/playlist_two.service';

@Component({
  selector: 'app-play-youtube',
  templateUrl: './play-youtube.component.html',
  styleUrls: ['./play-youtube.component.css'],
})
export class PlayYoutubeComponent {
  songDetails: Song;
  newlySavedSong: Subscription;

  constructor(private songsService: SongsService,
    private playlistTwoService: PlaylistTwoService,
  public sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private router: Router,
   ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const songTitle = params['title'];
      if(this.songsService.getSongByTitle(songTitle) != null) {
      this.songDetails = this.songsService.getSongByTitle(songTitle);
      }
      if(this.playlistTwoService.getSongByTitle(songTitle) != null) {
        this.songDetails = this.playlistTwoService.getSongByTitle(songTitle);
        }
    });
  }


}
