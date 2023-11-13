import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PlaylistComponent } from './display-songs/playlist/playlist.component';
import { AddSongsComponent } from './add-songs/add-songs.component';
import { PlayYoutubeComponent } from './display-songs/playlist/play-youtube/play-youtube.component';
import { AuthComponent } from './auth/auth.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/playlist', pathMatch: 'full' },
  {path: 'playlist', component: PlaylistComponent},
  {path: 'youtube/:title', component: PlayYoutubeComponent},
  {path: 'add-song', component: AddSongsComponent},
  {path: 'auth', component: AuthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
