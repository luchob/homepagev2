import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-work-page',
  templateUrl: './work-page.component.html',
  styleUrls: ['./work-page.component.scss']
})
export class WorkPageComponent implements OnInit {

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Lachezar Balev - Work and CV');
  }

}
