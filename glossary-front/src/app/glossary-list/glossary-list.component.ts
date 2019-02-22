import { Component, OnInit } from '@angular/core';
import {GlossaryService } from '../glossary.service';
import {Glossary} from "../glossary";

@Component({
  selector: 'app-glossary-list',
  templateUrl: './glossary-list.component.html',
  styles: []
})
export class GlossaryListComponent implements OnInit {

  private nrGlossaries: number;
  private glossaries: Glossary[] = [];

  constructor(private glossaryService: GlossaryService ) { }

  ngOnInit() {
    this.glossaryService.countGlossaries().subscribe(nr => this.nrGlossaries = nr);
    this.glossaryService.getGlossaries().subscribe(glossaries => this.glossaries = glossaries);
  }

}
