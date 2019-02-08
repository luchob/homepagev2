import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-whereabouts-page',
  templateUrl: './whereabouts-page.component.html',
  styleUrls: ['./whereabouts-page.component.scss']
})
export class WhereaboutsPageComponent implements OnInit {

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Lachezar Balev - Contact');
  }

}
