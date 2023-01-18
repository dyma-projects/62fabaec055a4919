import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css'],
})
export class Exercice1Component {
  nom: String;
  constructor() {
    this.nom = `Imrane`;
  }
  choixs!: String | undefined;
  LeChoix(choix: String) {
    this.choixs = choix;
    console.log('le choix et ' + this.choixs);
  }
}