import { EventEmitter, Injectable } from "@angular/core";
import { Song } from "../shared/song.model"
import { Subject  } from "rxjs";
import { SongsService } from "./playlist_one.service";

@Injectable({
  providedIn: 'root',
})


export class PlaylistTwoService {


// * PLAYLIST 2
songSelected = new Subject<Song>();

playlistChanged = new Subject<Song[]>();

private playlistTwo: Song[] =  [

]

getSongs() {
  return this.playlistTwo.slice();
}

getSongByTitle(title: string) {
  const foundSong = this.playlistTwo.find((song) => song.title === title);
  return foundSong;
}

deleteSongByTitle(title: string) {
  const newPlaylist = this.playlistTwo.filter((song) => song.title !== title);
  this.playlistTwo = newPlaylist
  this.playlistChanged.next(this.playlistTwo.slice());
}


addSong(song) {
  console.log(song)
  this.playlistTwo.push(song.value)
  this.playlistChanged.next(this.playlistTwo.slice());
}

updateArray(newArray) {
  this.playlistTwo =  newArray;
}

// * Local Storage

updateLocalStorage() {

  localStorage.removeItem('playlistTwo');

  let newData = this.playlistTwo.slice();

  if(localStorage.getItem('playlistTwo') == null) {
    localStorage.setItem('playlistTwo', '[]');
  }

  let oldData = JSON.parse(localStorage.getItem('playlistTwo'));
  oldData.push(newData);


  localStorage.setItem('playlistTwo', JSON.stringify(oldData));

}

pullLocalStorage() {
  if(localStorage.getItem('playlistTwo' )!= null){
    this.playlistTwo  = JSON.parse(localStorage.getItem('playlistTwo'))[0]
  }
}
}
