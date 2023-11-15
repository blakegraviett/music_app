import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { SongsService } from '../services/playlist_one.service';
import { PlaylistTwoService } from '../services/playlist_two.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-songs',
  templateUrl: './add-songs.component.html',
  styleUrls: ['./add-songs.component.css']
})
export class AddSongsComponent {

  playlistOneTitleSubs: Subscription;
  playlistTwoTitleSubs: Subscription;

  playlistOneTitle: String ='';
  playlistTwoTitle: String = '';

  addSongForm = new FormGroup({
    title: new FormControl('', Validators.required),
    artist: new FormControl('', Validators.required),
    albumn: new FormControl('', Validators.required),
    imagePath: new FormControl('', Validators.required),
    url: new FormControl('', Validators.required),
    });

    constructor( private songService: SongsService, private playlistTwoService: PlaylistTwoService){}
    playlist: Boolean;

    ngOnInit() {
      if(localStorage.getItem('playlistOneTitle' )!= null){
        this.playlistOneTitle  = JSON.parse(localStorage.getItem('playlistOneTitle'))
      }
       // ? If the playlist has no name make the button say First
      if(localStorage.getItem('playlistOneTitle')[3] == ']') {
        this.playlistOneTitle = 'First';
      }



      if(localStorage.getItem('playlistTwoTitle' )!= null){
        this.playlistTwoTitle  = JSON.parse(localStorage.getItem('playlistTwoTitle'))
      }
      // ? If the playlist has no name make the button say Second
      if(localStorage.getItem('playlistTwoTitle')[3] == "]") {
        this.playlistTwoTitle = 'Second';
      }

    }


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
