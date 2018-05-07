import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component, OnInit} from '@angular/core';
import { Film } from '../film';

@Component({
    selector: 'app-wishlist',
    template: `<ul>
                <li *ngFor="let film of films">
                <p>Film title: {{film?.title}}</p>
                <p>Vote Average : {{film?.vote_average}}</p>
                </li>
            </ul>`,
})


export class WishListComponent implements OnInit{

    film: Film;

    films: Film[]=[];

    ngOnInit(){
        var key : string = "wishlist";
        let film = JSON.parse(localStorage.getItem(key));
        this.films.push(film);
    }
}