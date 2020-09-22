import { Component, OnInit, ElementRef } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: './photos-page.component.html',
  styleUrls: ['./photos-page.component.scss']
})
export class PhotosPageComponent implements OnInit {
  downArrow = faChevronDown;
  myElement;

  constructor(myElement: ElementRef) { this.myElement = myElement }

  ngOnInit() {
  }

  scrollDown() {
    this.myElement.nativeElement.ownerDocument.getElementById('photo-gallery-container').scrollIntoView({behavior: 'smooth'});
  };

}
