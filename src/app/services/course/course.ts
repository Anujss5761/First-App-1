import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Course {

  constructor() { }

  
  getCourses(): Course[] {
    let data = localStorage.getItem('STORAGE_KEY');
    if (!data) {
      localStorage.setItem('STORAGE_KEY', JSON.stringify([])); // Initialize storage if not present
      data = JSON.stringify([]);
      console.log('Data initialized in localStorage:', data);
      const courses = JSON.parse(data);
      return courses;
    }
    return [];
  }
}
