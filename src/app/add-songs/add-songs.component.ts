import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { SongsService } from '../services/playlist_one.service';
import { PlaylistTwoService } from '../services/playlist_two.service';

@Component({
  selector: 'app-add-songs',
  templateUrl: './add-songs.component.html',
  styleUrls: ['./add-songs.component.css']
})
export class AddSongsComponent {

  addSongForm = new FormGroup({
    title: new FormControl('', Validators.required),
    artist: new FormControl('', Validators.required),
    albumn: new FormControl('', Validators.required),
    imagePath: new FormControl('', Validators.required),
    url: new FormControl('', Validators.required),


    });

    constructor( private songService: SongsService, private playlistTwoService: PlaylistTwoService){}
    playlist: Boolean;

    playlistOne() {
      this.playlist = true
    }

    playlistTwo() {
      this.playlist = false
    }


    onSubmit() {
      if(this.playlist === true) {
      this.songService.addSong(this.addSongForm);
      this.songService.updateLocalStorage();
      this.addSongForm.reset();
      }

      if(this.playlist === false) {
        this.playlistTwoService.addSong(this.addSongForm);
        this.playlistTwoService.updateLocalStorage();
        this.addSongForm.reset();
      }
    }


}
