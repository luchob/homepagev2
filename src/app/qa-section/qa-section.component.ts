import {Component, Input, OnInit} from '@angular/core';
import {Mood, QaModel} from '../model/qa.model';

@Component({
  selector: 'app-qa-section',
  templateUrl: './qa-section.component.html',
  styleUrls: ['./qa-section.component.scss']
})
export class QaSectionComponent implements OnInit {

  moodType = Mood;
  @Input() qa: QaModel;

  constructor() { }

  ngOnInit() {
  }

}
