import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

	heroes:Heroe[] = [];

	constructor( private _heroesService:HeroesService, private router: Router) {
		
		//console.log("constructor");
	
	}

	ngOnInit() {

		//trae los heroes del servicio
		this.heroes = this._heroesService.getHeroes();

	}

	verHeroe( idx:number ){

		//se llama al pinchar un heroe y le pasa el indice (id)
		this.router.navigate( ['/heroe', idx] )

	}

}
