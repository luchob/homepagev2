import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, map, mergeMap} from 'rxjs/operators';
import {SEOServiceService} from './services/seoservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private seoService: SEOServiceService) {}

  ngOnInit() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(_ => this.activatedRoute),
      map((route) => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      mergeMap(route => route.data)
    ).
    subscribe(event => {
      const title = event['title'];
      const desc = event['description'];

      if (title && desc) {
        this.seoService.updateTitle(title);
        this.seoService.updateDescription(desc);
      }

      window.scrollTo(0, 0);
    });
  }

}
