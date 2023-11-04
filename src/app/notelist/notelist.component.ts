import { Component } from '@angular/core';
import { NoteModel } from 'src/models/note';

@Component({
  selector: 'app-notelist',
  templateUrl: './notelist.component.html',
  styleUrls: ['./notelist.component.css']
})
export class NotelistComponent {

  notes: NoteModel[] = [];

  constructor() {
    this.notes = [
      new NoteModel('Note 1', 'Content 1', true),
      new NoteModel('Note 2', 'Content 2'),
      new NoteModel('Note 3', 'Content 3'),
    ]
   }

  onDeleteNote (note: NoteModel) {
    this.notes = this.notes.filter(n => n !== note);
    console.log(this.notes);
  }

  onAddNote (note: NoteModel) {
    this.notes.push(note);
    console.log(this.notes);
  }
}
