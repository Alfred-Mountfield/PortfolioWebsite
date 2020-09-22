import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { SizeDetectorComponent } from './shared/size-detector/size-detector.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { PhotosPageComponent } from './pages/photos/photos-page.component';
import { AboutPageComponent } from './pages/about/about-page.component';
import { ProjectsPageComponent } from './pages/projects/projects-page.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { PhotoCarouselComponent } from './pages/photos/photo-carousel/photo-carousel.component';
import { PhotoGalleryComponent } from './pages/photos/photo-gallery/photo-gallery.component';
import { PhotoThumbnailComponent } from './pages/photos/photo-gallery/photo-thumbnail/photo-thumbnail.component';
import { ResizeService } from "./shared/size-detector/resize.service";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    HomePageComponent,
    PhotosPageComponent,
    AboutPageComponent,
    ProjectsPageComponent,
    FooterComponent,
    HeaderComponent,
    PhotoCarouselComponent,
    PhotoGalleryComponent,
    PhotoThumbnailComponent,
    SizeDetectorComponent,
  ],
  exports: [ AppComponent ],
  providers: [ ResizeService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
