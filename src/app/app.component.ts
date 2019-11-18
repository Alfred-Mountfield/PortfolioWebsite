import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: "app-root",
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private router: Router) {  }
  faCoffee = faCoffee;
  title = 'PersonalWebsite';
}
