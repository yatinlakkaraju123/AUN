import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {}
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Scroll to top when navigating to the About page
        if (event.url === '/about') {
          window.scrollTo(0, 0);
        }
         if (event.url === '/policy') {
           window.scrollTo(0, 0);
         }
          if (event.url === '/home') {
            window.scrollTo(0, 0);
          }
           
           
             

      }
    });
  }
  title = 'RestourentApp';
}
