import { Component , Input} from '@angular/core';
import { Song } from '../shared/song.model';
import { SongsService } from '../shared/songs.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-play-youtube',
  templateUrl: './play-youtube.component.html',
  styleUrls: ['./play-youtube.component.css'],
})
export class PlayYoutubeComponent {
  songDetails: Song;
  newlySavedSong: Subscription;

  constructor(private songsService: SongsService,
    public sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private router: Router,
   ) {}

  ngOnInit() {
     this.newlySavedSong = this.songsService.songSelected.subscribe((song: Song) => {
      console.log(song.title);
      this.songDetails = song;
     });
  }

}
