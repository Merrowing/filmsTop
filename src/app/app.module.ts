import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { FormsModule }        from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';

import { AppComponent }       from './app.component';
import { AppRoutingModule }   from './app-routing.module';
import { FilmsTopComponent }  from './filmsTop/fimsTop.component';
import {SearchComponent}      from  './search/search.component';
import { WatchListComponent } from './watchlist/watchlist.component';
import { WishListComponent } from './wishlist/wishlist.component';
 
@NgModule({
    imports: [ 
        BrowserModule, 
        FormsModule, 
        HttpClientModule,
        AppRoutingModule
    ],
    declarations: [ 
        AppComponent,
        FilmsTopComponent,
        SearchComponent,
        WatchListComponent,
        WishListComponent
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }