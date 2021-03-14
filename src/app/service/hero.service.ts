import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private list: Hero[] = [
      {
        id: 1,
        name: "Pista",
        superPower: "metszés",
        address: "Fő utca"
      },
    
      {
        id: 2,
        name: "Bodri",
        superPower: "ugatás",
        address: "Cifra utca"
      },
    
      {
        id: 3,
        name: "Mici",
        superPower: "nyávogás",
        address: "Egér út"
      },
    
      {
        id: 4,
        name: "Rigó",
        superPower: "giliszta keresés",
        address: "Park utca"
      },
    
      {
        id: 5,
        name: "Marika",
        superPower: "gyomlálás",
        address: "Fő utca"
      }
    ]

  list$: BehaviorSubject<Hero[]> = new BehaviorSubject<Hero[]>([]);


  constructor() { }

  getAll(): void {
    this.list$.next(this.list);
  }
}
