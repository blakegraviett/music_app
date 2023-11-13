import { EventEmitter, Injectable } from "@angular/core";
import { Song } from "src/app/shared/song.model";
import { Subject  } from "rxjs";
import { PlaylistTwoService } from "./playlist_two.service";

@Injectable({
  providedIn: 'root',
})


export class SongsService {

// * PLAYLIST 1
songSelected = new Subject<Song>();
playlistChanged = new Subject<Song[]>();


private playlistOne: Song[] =  [

]

getSongs() {
  return this.playlistOne.slice();
}

getSongByTitle(title: string) {
  const foundSong = this.playlistOne.find((song) => song.title === title);
  return foundSong;
}

deleteSongByTitle(title: string) {
  const newPlaylist = this.playlistOne.filter((song) => song.title !== title);
  this.playlistOne = newPlaylist
  this.playlistChanged.next(this.playlistOne.slice());
}


addSong(song) {
  console.log(song)
  this.playlistOne.push(song.value)
  this.playlistChanged.next(this.playlistOne.slice());
}

updateArray(newArray) {
  this.playlistOne =  newArray;
}

// * Local Storage

updateLocalStorage() {

  localStorage.removeItem('playlistOne');

  let newData = this.playlistOne.slice();

  if(localStorage.getItem('playlistOne') == null) {
    localStorage.setItem('playlistOne', '[]');
  }

  let oldData = JSON.parse(localStorage.getItem('playlistOne'));
  oldData.push(newData);


  localStorage.setItem('playlistOne', JSON.stringify(oldData));
}

pullLocalStorage(){
  if(localStorage.getItem('playlistOne' )!= null){
    this.playlistOne  = JSON.parse(localStorage.getItem('playlistOne'))[0]
  }
}
}
