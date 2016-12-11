import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TestingService {

  root = 'https://jsonplaceholder.typicode.com/'

  constructor(private _http: Http) { }

  getPosts(a?: string){
    return this._http.get(this.root + 'posts')
      .map(res => res.json());
  }

  getPost(a: string){
    return this._http.get(this.root + 'posts/' + a)
      .map(res => res.json());
  }

}
