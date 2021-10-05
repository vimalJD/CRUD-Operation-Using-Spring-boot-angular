import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import {User } from '../user';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  
  //[x: string]: any;
  //username! : string;
    username : string;
    user : any;
  //username: any;
  public constructor(private service : UserServiceService) {
    this.username = " ";
  }

  ngOnInit(): void {
  }
  
  public findByUsername(){
    let response = this.service.getUserByUsername(this.username);
    response.subscribe(data => this.user = data);
  }
  
}
