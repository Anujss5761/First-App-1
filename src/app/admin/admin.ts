import { Component } from '@angular/core';
import { NgForm as ngForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Courses } from '../courses/courses';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule, RouterLink, Courses],
  templateUrl: './admin.html',
  styleUrl: './admin.scss'
})
export class Admin {

  model: any = {};
  cover!: String | null;
  cover_file: any;
  showError = false;
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



 onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.cover_file = file;
      const reader = new FileReader();
      console.log(reader);
      reader.onload = () => {
        const dataUrl = reader.result!.toString();
        this.cover = dataUrl;
        console.log(this.cover);
      };
      reader.readAsDataURL(file);
      this.showError = false; // Reset error when a file is selected
    }
  }
   
  onSubmit(form: ngForm){
    if(form.invalid){
      console.log('Form is invalid');
      form.control.markAllAsTouched();
      if(!this.cover_file) {
        this.showError = true; 
      }
      return;
    }
    console.log(form.value);

    form.reset;
    this.cover = null;
    this.cover_file = null;

    this.saveCourse(form.value);
  }

  saveCourse(formValue: any) {
    console.log('Saving course:', formValue);

    // const data = {
    //   ...formValue,
    //   image: this.cover,
    //   id:  this.courses.length + 1,
    // }

    // this.courses = [...this.courses, data];
    // this.setItem(this.courses);
    
  }

  // deleteCourse(course: any) {
  //   // this.courses = this.courses.filter(course_Item => course_Item.id != course.id);
  //   // this.setItem(this.courses);
  // }

  setItem(data: any) {
    localStorage.setItem('STORAGE_KEY', JSON.stringify(data));
  }
}
