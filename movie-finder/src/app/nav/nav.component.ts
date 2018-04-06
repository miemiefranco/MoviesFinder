import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  navOpen:boolean = false;
  constructor() { }

  ngOnInit() {
  }
  
  navmenuClicked()
  {
    this.navOpen = !this.navOpen;
    console.log(this.navOpen);
  }
}
