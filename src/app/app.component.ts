import { Component } from '@angular/core';
   
@Component({
    selector: 'my-app',
    template: `<div>
    <h2>Films</h2>
         <nav>
            <a routerLink="/filmsTop">Last10</a>
            <a routerLink="/search">Search</a>
            <a routerLink="/watchlist">Watchlist</a>
            <a routerLink="/wishlist">Watchlist</a>
         </nav>
    <router-outlet></router-outlet>
</div>`

})

export class AppComponent  { 
   title = 'Films'
}