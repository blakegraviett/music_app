import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { SongsService } from '../shared/songs.service';

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

    constructor( private songService: SongsService){}


    onSubmit() {
      this.songService.addSong(this.addSongForm)
      this.addSongForm.reset();
    }

}
