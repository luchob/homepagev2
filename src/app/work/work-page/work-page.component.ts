import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {MatExpansionPanel} from '@angular/material';

@Component({
  selector: 'app-work-page',
  templateUrl: './work-page.component.html',
  styleUrls: ['./work-page.component.scss']
})
export class WorkPageComponent {

  @ViewChildren(MatExpansionPanel) expPanels: QueryList<MatExpansionPanel>;

  constructor() {}

  onExpansionPanelOpen(expandedPanel: MatExpansionPanel) {

    // close all opened panels except the source of the event
    this.expPanels.forEach(function (el) {
      if (el !== expandedPanel) {
        el.close();
      }
    });

  }
}
