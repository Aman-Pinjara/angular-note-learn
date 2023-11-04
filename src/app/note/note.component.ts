import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NoteModel } from 'src/models/note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  @Input() note: NoteModel = new NoteModel('', '');
  @Output() deleteNote: EventEmitter<NoteModel> = new EventEmitter<NoteModel>();
  markedAsDone: boolean = false;

  ngOnInit() {
    this.markedAsDone = this.note.isDone;
  }

  onDeleteNote() {
    this.deleteNote.emit(this.note);
  }
}
