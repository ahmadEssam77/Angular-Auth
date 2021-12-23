import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _Router: Router) { }

  user:any = null;
  isLogin:boolean = false;
  roleA = new BehaviorSubject(false);
  roleB = new BehaviorSubject(false);
  roleC = new BehaviorSubject(false);

  // role:any = 'D';


  data:any[] = [
    {
      name: 'Ahmad Essam',
      email: 'ahmad@ok.com',
      role: 'A',
      password: 123
    },
    {
      name: 'Test2',
      email: 'test2@ok.com',
      role: 'B',
      password: 11
    },
    {
      name: 'Ola',
      email: 'ok@ok.com',
      role: 'C',
      password: 22
    }
  ]

  logout() {
    localStorage.removeItem('userData');
    this.user = null;
    this._Router.navigate(['login']);
  }
  
}
