import { EventEmitter, Injectable } from "@angular/core";
import { Song } from "./song.model"
import { Subject  } from "rxjs";

@Injectable({
  providedIn: 'root',
})


export class SongsService {
  songSelected = new Subject<Song>();

  playlistChanged = new Subject<Song[]>();





private songs: Song[] =  [

]

getSongs() {
  return this.songs.slice();
}

getSongByTitle(title: string) {
  const foundSong = this.songs.find((song) => song.title === title);
  return foundSong;
}

deleteSongByTitle(title: string) {
  const newPlaylist = this.songs.filter((song) => song.title !== title);
  console.log(newPlaylist);
  this.songs = newPlaylist
  this.playlistChanged.next(this.songs.slice());
}


addSong(song) {
  console.log(song)
  this.songs.push(song.value)
  this.playlistChanged.next(this.songs.slice());
}
}
