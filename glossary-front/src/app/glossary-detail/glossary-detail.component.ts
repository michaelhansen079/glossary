import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {GlossaryService} from "../glossary.service";
import {Glossary} from "../glossary";

@Component({
  selector: 'app-glossary-detail',
  templateUrl: './glossary-detail.component.html',
  styles: []
})
export class GlossaryDetailComponent implements OnInit {

  private glossary = new Glossary();

  constructor(private router: Router, private route: ActivatedRoute,
              private glossaryService: GlossaryService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.glossaryService.getGlossary(id).subscribe(glossary => this.glossary = glossary);
  }

  delete() {
    this.glossaryService.deleteGlossary(this.glossary.id).subscribe((response: any) =>
      this.router.navigate(['/glossary-list']));
  }

  update() {
    this.glossaryService.updateGlossary(this.glossary).subscribe((glossary: Glossary) =>
      this.router.navigate(['/glossary-list']));
  }
}
