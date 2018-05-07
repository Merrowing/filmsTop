import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { HttpService} from '../http.service';
import {Film } from '../film';

@Component({
    selector: 'app-search',
    template:  ` <div class="panel">
                    <div class="form-inline">
                        <div class="form-group">
                             <div class="col-md-8">
                                <input class="form-control" [(ngModel)]="text" placeholder = "Text" />
                             </div>
                        </div>
                    <div class="form-group">
                        <div class="col-md-offset-2 col-md-8">
                            <button class="btn btn-default" (click)="searchFilm(text)">Search</button>
                        </div>
                    </div>
                </div>
            <ul>
                <li *ngFor="let film of films">
                <p>Film title: {{film?.title}}</p>
                <p>Vote Average : {{film?.vote_average}}</p>
                </li>
            </ul>`,
    providers: [HttpService]
})

export class SearchComponent { 
   
    films: Film[]=[];
     
    constructor(private httpService: HttpService){}
      
    searchFilm(text: string){
        this.httpService.search(text).subscribe(data => this.films=data["results"].slice(0, 10));
    }
}
