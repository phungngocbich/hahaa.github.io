import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurants',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restaurants.component.html',
  styleUrl: './restaurants.component.css'
})
export class RestaurantsComponent  {
  
  restaurants: any[] = [];
  selectedRestaurant: any = null;

  constructor(private _service:DataService){}

  ngOnInit(): void {
    this._service.getRestaurants()
    .subscribe(
      (data)=> {
        this.restaurants = data;
      });
  }

}
