import { Component, OnInit } from '@angular/core';
import {QaService} from '../services/qa.service';
import {Mood, QaModel} from '../model/qa.model';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  qas: QaModel[];

  constructor(private qaService: QaService) {

  }

  ngOnInit() {
    this.qas = this.qaService.getQA();
  }

}
