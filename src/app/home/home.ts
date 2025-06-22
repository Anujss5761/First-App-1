import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Courses } from "../courses/courses";
import { About } from "../component/about/about";
// import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Courses, About],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
    //  val: number = 2;

    courses: any[] = [];


    ngOnInit() {
    // this.getCourses();
  }
    

  // getCourses() {
  //   let data = localStorage.getItem('STORAGE_KEY');
  //   if (!data) {
  //     localStorage.setItem('STORAGE_KEY', JSON.stringify([])); // Initialize storage if not present
  //     data = JSON.stringify([]);
  //     console.log('Data initialized in localStorage:', data);
  //   }
  //   this.courses = JSON.parse(data);
  // }
}
