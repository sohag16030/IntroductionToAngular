import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  providers: [CoursesService]
})

export class CourseComponent implements OnInit {

  course?: { id: number, name: string, image: string, description: string };
  courseId?: number;
  routeParamObs?: any;
  editMode: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private service: CoursesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((param) => {
      const courseId = param.get('id');
      if (courseId !== null) {
        this.courseId = +courseId;
        this.course = this.service.courses.find(course => course.id === this.courseId);
      }
    });
    
    this.activatedRoute.queryParamMap.subscribe((param)=>{
      this.editMode = Boolean(param.get('edit'));
    });

  }

  appendQueryParam() {
    console.log(this.courseId);
    this.router.navigate(['/Courses/Course', this.courseId], { queryParams: { edit: true } });
  }
}

