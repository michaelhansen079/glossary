import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlossaryListComponent } from './glossary-list/glossary-list.component';
import { GlossaryDetailComponent } from './glossary-detail/glossary-detail.component';
import { GlossaryFormComponent } from './glossary-form/glossary-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GlossaryListComponent,
    GlossaryDetailComponent,
    GlossaryFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
