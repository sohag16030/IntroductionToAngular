import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  navigateToHomePage() {
    this.router.navigate(['Home'], { relativeTo: this.activatedRoute}); // relative route (currently activated route)
    // this.router.navigateByUrl('Home'); //absolute path
  }
}
