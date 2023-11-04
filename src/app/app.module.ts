import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { NotelistComponent } from './notelist/notelist.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    NotelistComponent,
    AddNoteComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
