import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  //  title = 'first-app';
  


  constructor() {
    // console.log('App component initialized');
  }

  ngOnInit() {
    // console.log('App component initialized on ngOnInit');
    // this.changeTitle();
  }

  // changeTitle() {
  //   this.title = 'Title Changed!';
  //   console.log('Title changed to:', this.title);
  // }

}
