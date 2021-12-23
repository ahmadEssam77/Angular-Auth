import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _Router:Router, private _DataService:DataService) { }

  ngOnInit(): void {
  }

  login(name:String, password:any, token:any) {
        
    // Check login users
    for (let i = 0; i < this._DataService.data.length; i++) {
      if (this._DataService.data[i].name == name && this._DataService.data[i].password == password) {
        this._DataService.user = {name: this._DataService.data[i].name, password: this._DataService.data[i].password,
          role: this._DataService.data[i].role};
        // Store user data in  local storage
        localStorage.setItem('userData', JSON.stringify(this._DataService.user));

        if (this._DataService.data[i].role == 'A') {
          this._DataService.roleA.next(true);
          this._Router.navigate(['a']);
          this._DataService.isLogin = true;
        }
        else if (this._DataService.data[i].role == 'B') {
          this._DataService.roleB.next(true);
          this._Router.navigate(['b']);
          
        }
        else if (this._DataService.data[i].role == 'C') {
          this._DataService.roleC.next(true);
          this._Router.navigate(['c']);
        }

        // this._Router.navigate(['a']);
        break;
      }
      else {
        console.log("No");
        this._Router.navigate(['note']);
      }
    }
  }

}
