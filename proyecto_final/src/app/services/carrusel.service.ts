import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CarruselService {

  constructor(private client: HttpClient) { }

    slideImage(){
      return this.client.get("https://www.themealdb.com/api/json/v1/1/random.php")
    }
  
}
