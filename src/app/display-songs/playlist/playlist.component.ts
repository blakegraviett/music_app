import { Component } from '@angular/core';
import { SongsService } from 'src/app/services/playlist_one.service';
import { Song } from 'src/app/shared/song.model';
import { Subscription } from 'rxjs';
import { PlaylistTwoService } from 'src/app/services/playlist_two.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css'],
})
export class PlaylistComponent {
  playlistOne: Song[];
  playlistTwo: Song[];

  playlistOneTitle: String = 'Playlist One';
  playlistTwoTitle: String = 'Playlist Two';

  playlistOneChange: Boolean = false;
  playlistTwoChange: Boolean = false;

  songsSubscription: Subscription;
  playlistSubscription: Subscription;




  constructor(private songsService: SongsService, private playlistTwoService: PlaylistTwoService) {}

    changePlaylistOneTitleForm = new FormGroup({
      title: new FormControl('', Validators.required),
})

  changePlaylistTwoTitleForm = new FormGroup({
  title: new FormControl('', Validators.required),
})

  ngOnInit() {
    this.playlistOne = this.songsService.getSongs();
    this.playlistTwo =this.playlistTwoService.getSongs();
    this.songsSubscription = this.songsService.playlistChanged.subscribe((updatedSongs: Song[]) => this.playlistOne = updatedSongs);
    this.songsSubscription = this.playlistTwoService.playlistChanged.subscribe((updatedSongs: Song[]) => this.playlistTwo = updatedSongs);

    // * Pull Local Storage For Titles
    if(localStorage.getItem('playlistOneTitle' )!= null){
      this.playlistOneTitle  = JSON.parse(localStorage.getItem('playlistOneTitle'))
    }

    // ? If local Storage of playlist one is a blank string make it say playlist one
    if(localStorage.getItem('playlistOneTitle' ) == ''){
      this.playlistOneTitle  = 'First'
    }

    if(localStorage.getItem('playlistTwoTitle' )!= null){
      this.playlistTwoTitle  = JSON.parse(localStorage.getItem('playlistTwoTitle'))
    }

     // ? If local Storage of playlist two is a blank string make it say playlist one
     if(localStorage.getItem('playlistTwoTitle' ) == ''){
      this.playlistOneTitle  = 'Second'
    }

  }

  ngOnDestroy() {
    this.songsSubscription.unsubscribe();
    this.songsSubscription.unsubscribe();
  }



  onSubmitPlaylistOne() {
    this.playlistOneChange = false;
    this.playlistOneTitle = this.changePlaylistOneTitleForm.value.title;


    // * Local Storage Of Title 1
    localStorage.removeItem('playlistOneTitle');

    let newData = this.changePlaylistOneTitleForm.value.title.slice();

    if(localStorage.getItem('playlistOneTitle') == null) {
      localStorage.setItem('playlistOneTitle', '[]');
    }

    let oldData = JSON.parse(localStorage.getItem('playlistOneTitle'));
    oldData.push(newData);


    localStorage.setItem('playlistOneTitle', JSON.stringify(oldData));

  }

  onSubmitPlaylistTwo() {
    this.playlistTwoChange = false;
    this.playlistTwoTitle = this.changePlaylistTwoTitleForm.value.title;


     // * Local Storage Of Title 2
     localStorage.removeItem('playlistTwoTitle');

     let newData = this.changePlaylistTwoTitleForm.value.title.slice();

     if(localStorage.getItem('playlistTwoTitle') == null) {
       localStorage.setItem('playlistTwoTitle', '[]');
     }

     let oldData = JSON.parse(localStorage.getItem('playlistTwoTitle'));
     oldData.push(newData);


     localStorage.setItem('playlistTwoTitle', JSON.stringify(oldData));
  }


  // * Test
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.playlistOne, event.previousIndex, event.currentIndex);
    this.songsService.updateArray(this.playlistOne);
    this.songsService.updateLocalStorage();
  }
  drop2(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.playlistTwo, event.previousIndex, event.currentIndex);
    this.playlistTwoService.updateArray(this.playlistTwo);
    this.playlistTwoService.updateLocalStorage();
  }
}
