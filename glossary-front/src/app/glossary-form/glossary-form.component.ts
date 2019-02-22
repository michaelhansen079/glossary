import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {GlossaryService} from "../glossary.service";

@Component({
  selector: 'app-glossary-form',
  templateUrl: './glossary-form.component.html',
  styles: []
})
export class GlossaryFormComponent implements OnInit {

  private glossary = {
    id: "",
    english: "",
    bosnian: "",
    imageUrl: ""
  }

  constructor(private router: Router, private glossaryService: GlossaryService) { }

  ngOnInit() {
  }

  create() {
    this.glossaryService.addGlossary(this.glossary).subscribe((response: any) =>
      //On response
      this.router.navigate(['/glossary-list']));
  }

}
