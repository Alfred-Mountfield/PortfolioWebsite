import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ResizeService } from "../../../shared/size-detector/resize.service";
import { SCREEN_SIZE } from "../../../shared/size-detector/screen-size.enum";

@Component({
  selector: 'photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss'],
})

export class PhotoGalleryComponent implements OnInit {
  range; photos; photo_cols; num_cols;

  size: SCREEN_SIZE;

  onResize() {
    this.resizeSvc.onResize$.subscribe(x => {
      this.size = x;
      if (this.size < 3) {
        this.num_cols = 2;
      }
      else {
        this.num_cols = 3;
      }
      this.photo_cols = [];
      this.chunk_array(this.photo_cols, this.photos, this.num_cols);
    });
  }

  constructor(private resizeSvc: ResizeService) {
  }

  // ngAfterViewChecked(): void {
  //   this.onResize();
  // }

  ngOnInit() {
    this.range = Array.from(Array(17).keys()).map(x => ++x);
    this.photos = this.range.map((n) => `/assets/images/photo_gallery/${n}.jpg`);
    this.photo_cols = [];
    this.chunk_array(this.photo_cols, this.photos, this.num_cols);
    this.onResize();
  }

  chunk_array(output_arr: Array<any>, arr: Array<any>, num_sub_arrays) {
    let i = 0, n = arr.length;
    let len = n / num_sub_arrays;
    while (i < n) {
      output_arr.push(arr.slice(i, i += len));
    }
  }
}
