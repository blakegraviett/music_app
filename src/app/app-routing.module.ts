import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PlaylistComponent } from './display-songs/playlist/playlist.component';
import { AddSongsComponent } from './add-songs/add-songs.component';
import { PlayYoutubeComponent } from './play-youtube/play-youtube.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/playlist', pathMatch: 'full' },
  {path: 'playlist', component: PlaylistComponent},
  {path: 'add-song', component: AddSongsComponent},
  {path: 'youtube', component: PlayYoutubeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
