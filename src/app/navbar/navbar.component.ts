import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataService } from '../data.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

checkA:BehaviorSubject<any> = this._DataService.roleA;
checkB:BehaviorSubject<any> = this._DataService.roleB;
checkC:BehaviorSubject<any> = this._DataService.roleC;

// userRole:any = this._DataService.role = ;


  constructor(private _DataService:DataService) { }

  ngOnInit(): void {
    // console.log("user role", this.userRole);

    // if (localStorage.getItem('userData')) { 
    //   let x = JSON.stringify(localStorage.getItem('userData'));
    //   this.userRole = JSON.parse(x);
    //   // console.log(typeof(this.userRole));
    //   console.log("role", this.userRole);
    // }
  }

  getRoleFromLocalStorage() {
    if (localStorage.getItem('userData')) { 
      // let x = JSON.parse(localStorage.getItem('userData'));
      // x = JSON.parse(x);
      // this.userRole = JSON.parse(x);
      // console.log("role", this.userRole);
      // console.log(typeof(this.userRole));
      // console.log(typeof(x));
      // console.log(this.check);
    }
  }

  callLogOutMethod() {
    this._DataService.logout();
  }



}
