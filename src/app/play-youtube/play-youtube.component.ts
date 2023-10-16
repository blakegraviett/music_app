import { Component , Input} from '@angular/core';
import { Song } from '../shared/song.model';
import { SongsService } from '../shared/songs.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-play-youtube',
  templateUrl: './play-youtube.component.html',
  styleUrls: ['./play-youtube.component.css'],
})
export class PlayYoutubeComponent {
  @Input() song: Song;
  // songs: Song[];

  constructor(private songsService: SongsService, public sanitizer: DomSanitizer) { }

  ngOnInit() {

  }
}
