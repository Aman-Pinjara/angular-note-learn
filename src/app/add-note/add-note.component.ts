import { Component, Output, EventEmitter } from '@angular/core';
import { NoteModel } from 'src/models/note';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent {
  title: string = '';
  content: string = '';

  @Output() noteAdded = new EventEmitter<NoteModel>();

  onFormSubmit() {
    const note = new NoteModel(this.title, this.content);
    this.noteAdded.emit(note);
  }
}
