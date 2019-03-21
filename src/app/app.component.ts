import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, NavigationStart, Router} from '@angular/router';
import {filter, map, mergeMap} from 'rxjs/operators';
import {SeoService} from './services/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  loading = false;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private seoService: SeoService) {
  }

  ngOnInit() {

    const navigationStart$ = this.router.events.pipe(
      filter((event) => event instanceof NavigationStart)
    );

    navigationStart$.subscribe( _ => {
      this.loading = true;
    });

    const navigationEnd$ = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(_ => this.activatedRoute),
      map((route) => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      mergeMap(route => route.data)
    );

    navigationEnd$.subscribe(event => {
      this.loading = false;
      this.updateSEO(event);
      this.scrollToTop();
    });
  }

  /**
   * Update the SEO flags.
   * @param event the content of the navigation event.
   */
  private updateSEO(event) {
    const title = event['title'];
    const desc = event['description'];

    if (title && desc) {
      this.seoService.updateTitle(title);
      this.seoService.updateDescription(desc);
    }
  }

  /**
   * Scrolls the window to top.
   */
  private scrollToTop() {
    window.scrollTo(0, 0);
  }

}
