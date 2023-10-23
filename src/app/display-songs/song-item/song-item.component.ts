import { Component, Input,} from '@angular/core';
import { Song } from 'src/app/shared/song.model';
import { SongsService } from 'src/app/shared/songs.service';


@Component({
  selector: 'app-song-item',
  templateUrl: './song-item.component.html',
  styleUrls: ['./song-item.component.css'],
})
export class SongItemComponent {
  @Input() song: Song;

  constructor( private songService: SongsService){}

  onSlected() {
    this.songService.songSelected.next(this.song);
    console.log(this.song);
  }


}
