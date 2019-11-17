import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { PhotosPageComponent } from './pages/photos/photos-page.component';
import { AboutPageComponent } from './pages/about/about-page.component';
import { ProjectsPageComponent } from './pages/projects/projects-page.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomePageComponent,
    PhotosPageComponent,
    AboutPageComponent,
    ProjectsPageComponent,
    FooterComponent,
  ],
  exports: [ AppComponent ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
