import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  
  
  constructor(private router:Router) { }

  ngOnInit(): void {
   
  }
  btnClick() {
    this.router.navigateByUrl('/adduser');
};
btnClick1() {
  this.router.navigateByUrl('/createuser');
};
 
    






}
