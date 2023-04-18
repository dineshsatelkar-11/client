import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  list = [
    {
      number: '1',
      name: 'Product',
      icon: 'fa-solid fa-house',
    },
    {
      number: '2',
      name: 'Report',
      icon: 'fa-solid fa-house',
    },
    {
      number: '3',
      name: 'Order',
      icon: 'fa-solid fa-house',
    }
  ]

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
