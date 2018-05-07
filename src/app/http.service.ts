import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Film} from './film';
  
@Injectable()
export class HttpService{
  
    constructor(private http: HttpClient){ }
      
    getData(){
        return this.http.get('https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key=9572609ef1c2b09aba4a6acb0135dc0d')
    }

    search(term: string){
        return this.http.get('https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&query='+term+'&language=en-US&api_key=9572609ef1c2b09aba4a6acb0135dc0d')
    }

    
}