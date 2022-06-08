import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/model/car';
import { CarApiService } from './services/car-api.service';

@Component({
  selector: 'app-car-list', // cerco selector per taggare car list
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  carsArray: Car[] = [];

  selectedCar?: Car;

  constructor(private carService: CarApiService) { } // gli dobbiamo dare variabile di visibilità privatr/public

  ngOnInit(): void {
    this.carService.getCars().subscribe({
      next: cars => this.carsArray = cars,
      error: err => console.log('aiuto')
    })
  }

  openDetail(car: Car){ // devo specificare il tipo di car
      this.selectedCar = car;

  }

}
