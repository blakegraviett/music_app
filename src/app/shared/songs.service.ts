import { EventEmitter, Injectable } from "@angular/core";
import { Song } from "./song.model"
import { Subject  } from "rxjs";

@Injectable({
  providedIn: 'root',
})


export class SongsService {
  songSelected = new Subject<Song>();


private songs: Song[] =  [
  new Song('Snowflake', 'Powfu', "tell me your feelings and i won't tell you mine" ,
  'https://i.scdn.co/image/ab67616d0000b2732506a4a9ad9d5d01bcb95443','dvLFMZUcqlU'),

  new Song('Popular Girl Typical Boy', 'Powfu', "poems of the past" ,
  'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/58/60/43/58604376-4479-9814-1d3b-61d796ee1be9/886448465140.jpg/1200x1200bb.jpg','vzvkeOIDFuw'),

  new Song('Always You', 'Trey Lewis', "Single" ,
  'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/f8/38/0e/f8380e8d-48ac-a488-70df-45db1a6880ae/30624.jpg/600x600bf-60.jpg','vmatqvyXfyk')
]

getSongs() {
  return this.songs.slice();
}

getSongByTitle(title: string) {
  const foundSong = this.songs.find((song) => song.title === title);

  return foundSong;
}
}
