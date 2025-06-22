import { Component, Input, Output, EventEmitter, Inject, signal } from '@angular/core';
import { Course } from '../services/course/course';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [],
  templateUrl: './courses.html',
  styleUrl: './courses.scss'
})
export class Courses {
    @Input() courses: any;
    private _courses: Course[] = [];

    // courses = signal<Course[]>([]);

    @Input() isAdmin: boolean = false;
    // @Output() del = new EventEmitter();

    private courseService= Inject(Course);

    private course$ = new BehaviorSubject<Course[]>([]);

    get courses$() {
        return this.course$.asObservable(); 
      }


  // constructor(private courseService: Course) {}

       ngOnInit() {
        this._courses = this.courseService.getCourses();
    // this.getCourses();
  }

  constructor() {}


  // Remove unused injection or use it if needed

  getCourses(): Course[] {
    let data = localStorage.getItem('STORAGE_KEY');
    if (!data) {
      localStorage.setItem('STORAGE_KEY', JSON.stringify([])); // Initialize storage if not present
      data = JSON.stringify([]);
      // console.log('Data initialized in localStorage:', data);
      this.course$.next(JSON.parse(data));
    }
    this._courses = JSON.parse(data);
    return this._courses;
  }

  addCourse(data: Course) {
    const courses = this.course$.value;
    // const newCourse: Course = { ...data, id: courses.length + 1};
    // const newCourses: Course[] = [...courses, newCourse];
    // this.updateCourse(newCourses);
  }

  updateCourse(data: Course[]) {
    this.course$.next(data);
    localStorage.setItem('STORAGE_KEY', JSON.stringify(data));
  }


    deleteCourse(course: any) {
        // this.del.emit(course);
    }
}
