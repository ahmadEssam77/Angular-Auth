import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private _DataService:DataService) { }

  ngOnInit(): void {
  }

  callLogOutMethod() {
    this._DataService.logout();
  }

  

}
