import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';  // lib is large, add only the map operator as result


import 'rxjs/add/operator/toPromise';


@Injectable()
export class SpotService {
    private heroesUrl = 'api/heroes';  // URL to web api

    private headers = new Headers({'Content-Type': 'application/json'});


    update(hero: Hero): Promise<Hero> {
      const url = `${this.heroesUrl}/${hero.id}`;
      return this.http
        .put(url, JSON.stringify(hero), {headers: this.headers})
        .toPromise()
        .then(() => hero)
        .catch(this.handleError);
    }
    constructor(private http: Http) { }

    // this will get all the locations
    getSpots(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data as Hero[])
               .catch(this.handleError);
    }




    getSpot(id: number): Promise<Hero> {
        return this.getSpots()
        .then(heroes => heroes.find(hero => hero.id === id));
     }


    // this will create a new location
    create(name: String, city: String, lat: number, long: number): Promise<Hero> {

        const endpoint = 'api/calls';

        return this.http
       .post(endpoint, JSON.stringify({name: name, city: city, lat:lat,  long: long}), {headers: this.headers})
       .toPromise()
       .then(res => res.json().data as Hero)
       .catch(this.handleError);


    }

    findNearby(city: string): Promise<Hero[]>{
        return this.getSpots()
        .then(heroes => heroes.filter(hero => hero.city === city));
    }
    delete(id: number): Promise<void> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
}


    // handle errors
    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
    }
}
