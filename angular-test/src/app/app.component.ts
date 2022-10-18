import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Continent } from './contient.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public continent: Continent[];
  constructor(private Appservice: AppService){
    this.continent =[];
  }

  ngOnInit() {
      this.Appservice.getContinent().subscribe(continent =>{this.continent = continent})
    }
  chercher(recherche: string){
      this.Appservice.getSearchContinent(recherche).subscribe(continent =>{this.continent = continent})
  }
  }
