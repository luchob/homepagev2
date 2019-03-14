import {Injectable, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private titleService: Title, private metaService: Meta) {
  }

  updateTitle(title: string) {
    this.titleService.setTitle(title);
  }

  updateDescription(desc: string) {
    this.metaService.updateTag({ name: 'description', content: desc });
  }
}
