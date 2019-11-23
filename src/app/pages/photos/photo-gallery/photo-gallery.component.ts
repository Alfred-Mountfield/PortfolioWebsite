import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss']
})



export class PhotoGalleryComponent implements OnInit {
  range; photos; photo_cols;
  constructor() { }

  ngOnInit() {
    this.range = Array.from(Array(17).keys()).map(x => ++x);
    this.photos = this.range.map((n) => `/assets/images/photo_gallery/${n}.jpg`);
    this.photo_cols = [];
    this.chunk_array(this.photo_cols, this.photos, 3);
  }

  chunk_array(output_arr: Array<any>, arr: Array<any>, num_sub_arrays) {
    let i = 0, n = arr.length;
    let len = n / num_sub_arrays;
    while (i < n) {
      output_arr.push(arr.slice(i, i += len));
    }
  }
}
