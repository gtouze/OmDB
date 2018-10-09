import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FilmProvider } from "../../providers/film/film";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public film: FilmProvider
  ) {}

  getListeFilm() : Array<any>{
    return this.film.film;
  }
}
