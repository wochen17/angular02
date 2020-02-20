import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    console.log("Component destoryed")
  }
  ngOnInit(): void {
    console.log("Hello World")
  }
  title = 'angular02';
  constructor() {
    
  }
}
