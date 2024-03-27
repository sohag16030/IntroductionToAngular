import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_Routes';

  constructor(private acitivatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.acitivatedRoute.fragment.subscribe((value) => {
      console.log(value);
      if (value != null)
        this.jumpTo(value)
    })
  }
  jumpTo(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
