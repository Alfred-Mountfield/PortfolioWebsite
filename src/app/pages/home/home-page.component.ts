import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  myElement;

  constructor(myElement: ElementRef) { this.myElement = myElement }

  ngOnInit() {
  }

  scrollDown() {
    this.myElement.nativeElement.ownerDocument.getElementById('content').scrollIntoView({behavior: 'smooth'});
  };

}
