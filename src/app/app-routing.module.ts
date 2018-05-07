import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FilmsTopComponent } from './filmsTop/fimsTop.component';
import { SearchComponent }   from  './search/search.component';
import { WatchListComponent } from './watchlist/watchlist.component';
import { WishListComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  { path: '', redirectTo: '/filmsTop', pathMatch: 'full' },
  { path: 'filmsTop', component: FilmsTopComponent },
  { path: 'search', component: SearchComponent },
  { path: 'watchlist', component: WatchListComponent },
  { path: 'wishlist', component: WishListComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}