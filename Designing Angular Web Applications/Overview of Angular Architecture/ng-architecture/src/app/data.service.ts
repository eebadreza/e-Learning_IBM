import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';

const usersUrl = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(usersUrl).pipe(
      tap((data) => console.log(data)),
      map((res) => {
        return {
          users: res,
        };
      })
    );
  }
}
