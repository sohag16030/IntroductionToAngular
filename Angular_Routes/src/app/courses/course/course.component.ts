import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  providers: [CoursesService]
})

export class CourseComponent implements OnInit {
  course?: { id: number, name: string, image: string, description: string };

  constructor(private activatedRoute: ActivatedRoute, private service: CoursesService) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe((param) => {
      const courseId = this.activatedRoute.snapshot.paramMap.get('id');
      if (courseId !== null) {
        this.course = this.service.courses.find(x => x.id === +courseId);
      }
    });

  }
}

