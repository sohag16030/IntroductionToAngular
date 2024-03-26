import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'] 
})

export class CourseComponent implements OnInit {
  course?: { id: number, name: string, image: string, description: string };

  constructor(private activatedRoute: ActivatedRoute, private service: CoursesService) { }

  ngOnInit() {
    const idParam = this.activatedRoute.snapshot.paramMap.get('id');

    if (idParam !== null) {
      console.log(idParam);
      this.course = this.service.courses.find(x => x.id === +idParam);
      console.log(this.course);
    } else {
      console.error("ID parameter is null.");
    }
  }
}

