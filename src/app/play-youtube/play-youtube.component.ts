import { Component , Input} from '@angular/core';
import { Song } from '../shared/song.model';
import { songsService } from '../shared/songs.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-play-youtube',
  templateUrl: './play-youtube.component.html',
  styleUrls: ['./play-youtube.component.css'],
})
export class PlayYoutubeComponent {
   songs: Song[];

  constructor(private songsService: songsService, public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.songs = this.songsService.getSongs();
  }
}
