import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Category } from '../interfaces/category';
import { CategoryReponse } from '../interfaces/category-reponse';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly SERVER_URL = environment.serverUrl + "/categories";
  private categories: BehaviorSubject<Category[]>;

  constructor(private http: HttpClient) { 
    this.categories = new BehaviorSubject([]);
  }

  getCategories(): Observable<Category[]>{
    return this.http.get<CategoryReponse>(this.SERVER_URL,{withCredentials: true})
      .pipe(
        map( resp => resp.categories )
      );
  }

  updateEvents(response: CategoryReponse) {
    if(response.success){
      this.categories.next(response.categories);
    }
  }
}
