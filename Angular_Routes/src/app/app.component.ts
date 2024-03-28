import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private authService: AuthService) { }

  login() {
    console.log("Loggedin");
    this.authService.loggedIn = true;
  }
  logout() {
    console.log("Loggedout");
    this.authService.loggedIn = false;
  }
  // constructor(private acitivatedRoute: ActivatedRoute) { }

  // ngOnInit() {
  //   this.acitivatedRoute.fragment.subscribe((value) => {
  //     console.log(value);
  //     if (value != null)
  //       this.jumpTo(value)
  //   })
  // }
  // jumpTo(section: string) {
  //   const element = document.getElementById(section);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }

}
