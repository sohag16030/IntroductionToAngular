import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './courses/course/course.component';
import { NgModule } from '@angular/core';
import { CourseGuardService } from './course-guard.service';
import { AuthService } from './auth.service';

const appRoute: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Courses', component: CoursesComponent},
  {
    path: 'Courses', canActivateChild: [CourseGuardService], children: [
      { path: 'Course/:id', component: CourseComponent },
    ]
  },
  { path: '**', component: ErrorComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule],
  providers: [CourseGuardService, AuthService]
})

export class AppRoutingModule {

}