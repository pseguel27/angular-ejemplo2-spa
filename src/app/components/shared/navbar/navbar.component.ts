import { Component, OnInit } from '@angular/core';
//se importa para utilizar router
import { Router } from '@angular/router';

@Component({
	selector: 'app-navbar',
  	templateUrl: './navbar.component.html'
})

export class NavbarComponent implements OnInit {

  	constructor( private router:Router) { }

  	ngOnInit() {
  	}

	buscarHeroe( termino:string ){
		this.router.navigate( ['/result', termino] )
	}

}
