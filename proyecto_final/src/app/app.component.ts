import { Component, OnInit } from '@angular/core';
import { CarruselService } from './services/carrusel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'proyecto_final';

  slImages: any
  slImagesArray: any = []

  constructor (private carrusel: CarruselService){}

  ngOnInit() {
  
    for (let step = 0; step < 3; step++) {

      const obs = this.carrusel.slideImage()
      obs.subscribe(
        response => {
          this.slImages = response
          this.slImages = this.slImages.meals[0]
          this.slImages = this.slImages.strMealThumb
         
          this.slImagesArray.push(this.slImages)

        },
        error => console.log(error)
      ) 
    }

    console.log(this.slImagesArray)

  }
}