import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { CARS } from 'src/app/model/mock-cars';

@Injectable({
  providedIn: 'root'
})
export class CarApiService { // creato da quickfix

  constructor() { }

  getCars() {
    const cars = CARS; // sono uguali a cars false
    console.log('eccomi sono il servizio', cars);
    return of(cars) // metodo che trasoforma cars in observable
  }
}
