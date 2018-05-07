import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component, OnInit} from '@angular/core';
import { HttpService} from '../http.service';
import {Film} from '../film';

@Component({
    selector: 'app-filmsTop',
    template:  `<ul>
                <li *ngFor="let film of films">
                <p>Film title: {{film?.title}}</p>
                <p>Vote Average : {{film?.vote_average}}</p>
                <button class="btn btn-default" title="watchlist"
                (click)="addToWatchlist(film)">watchlist</button>
                <button class="btn btn-default" title="wishlist"
                (click)="addToWishlist(film)">wishlist</button>
                </li>
            </ul>`,
    providers: [HttpService]
})

export class FilmsTopComponent implements OnInit { 
   
    films: Film[]=[];
    wtFilms: Film[]=[];
    wiFilms: Film[]=[];
    constructor(private httpService: HttpService){}
      
    ngOnInit(){
          
        this.httpService.getData().subscribe(data => this.films=data["results"].slice(0, 10));
    }

    addToWatchlist(film: Film){
        var key: string = "watchlist";
        this.wtFilms = JSON.parse(localStorage.getItem(key));
        if(this.wtFilms == null)
            this.wtFilms = [];
        this.wtFilms.push(film);
        localStorage.setItem(key, JSON.stringify(this.wtFilms));
    }

    addToWishlist(film : Film){
        var key: string = "wishlist";
        this.wiFilms = JSON.parse(localStorage.getItem(key));
        if(this.wiFilms == null)
            this.wiFilms = [];
        this.wiFilms.push(film);
        localStorage.setItem(key, JSON.stringify(this.wiFilms));
    }
}