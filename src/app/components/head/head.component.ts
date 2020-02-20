import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.less']
})
export class HeadComponent implements OnInit, OnDestroy{
  ngOnDestroy(): void {
    
  }

  constructor() { }

  ngOnInit(): void {
    console.log("head component init")
  }

}
