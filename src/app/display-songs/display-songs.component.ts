import { Component, Input} from '@angular/core';
import { Song } from '../shared/song.model';
import { songsService } from '../shared/songs.service';
@Component({
  selector: 'app-display-songs',
  templateUrl: './display-songs.component.html',
  styleUrls: ['./display-songs.component.css'],
})
export class DisplaySongsComponent {
  songs: Song[];

  constructor(private songsService: songsService) {}


  ngOnInit() {
    this.songs = this.songsService.getSongs();
  }

}

