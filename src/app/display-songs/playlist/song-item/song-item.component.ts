import { Component, Input,} from '@angular/core';
import { Song } from 'src/app/shared/song.model';
import { SongsService } from 'src/app/services/playlist_one.service';
import { PlaylistTwoService } from 'src/app/services/playlist_two.service';


@Component({
  selector: 'app-song-item',
  templateUrl: './song-item.component.html',
  styleUrls: ['./song-item.component.css'],
})
export class SongItemComponent {
  @Input() song: Song;

  constructor( private songService: SongsService, private playlistTwoService: PlaylistTwoService){}

  removeSong(title: string) {
    this.songService.deleteSongByTitle(title);
    this.songService.updateLocalStorage();

    this.playlistTwoService.deleteSongByTitle(title);
    this.playlistTwoService.updateLocalStorage();



  }


}
