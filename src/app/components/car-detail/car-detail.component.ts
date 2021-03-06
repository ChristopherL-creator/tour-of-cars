import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/model/car';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {

  @Input() car?: Car; // posso togliere proprietà, ma devo mettere "?" che mostra car solo quando c'è

  constructor() { }

  ngOnInit(): void {
  }

}
