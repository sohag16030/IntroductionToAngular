import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [CoursesService]
})
export class CoursesComponent implements OnInit {
  courses: { id: number, name: string, image: string, description: string }[] = [];

  constructor(private service: CoursesService) { }

  ngOnInit() {
    this.courses = this.service.getCourses();
  }
}
