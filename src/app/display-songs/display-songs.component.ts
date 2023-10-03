import { Component } from '@angular/core';
import { Song } from '../shared/song.model';
@Component({
  selector: 'app-display-songs',
  templateUrl: './display-songs.component.html',
  styleUrls: ['./display-songs.component.css']
})
export class DisplaySongsComponent {
  songs: Song[] = [
    new Song('Snowflake', 'Powfu', "tell me your feelings and i won't tell you mine" ,
    'https://i.scdn.co/image/ab67616d0000b2732506a4a9ad9d5d01bcb95443', 'https://www.youtube.com/watch?v=dvLFMZUcqlU'),

    new Song('Popular Girl Typical Boy', 'Powfu', "poems of the past" ,
    'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/58/60/43/58604376-4479-9814-1d3b-61d796ee1be9/886448465140.jpg/1200x1200bb.jpg', 'https://www.youtube.com/watch?v=vzvkeOIDFuw'),

    new Song('Always You', 'Trey Lewis', "Single" ,
    'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/f8/38/0e/f8380e8d-48ac-a488-70df-45db1a6880ae/30624.jpg/600x600bf-60.jpg', 'https://www.youtube.com/watch?v=vmatqvyXfyk')
  ]
}
