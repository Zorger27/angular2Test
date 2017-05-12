import { Component, OnInit } from '@angular/core';
import { NotesService } from '../_shared/notes.service';

@Component({
  selector: 'note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.sass'],
  providers: [NotesService]
})

export class NoteEditorComponent implements OnInit {

  color = 'white';

  constructor(
    private ns: NotesService
  ) { }

  ngOnInit() {
  }

  addNote( noteText ){
    let note = {
      text: noteText.value,
      color: this.color
    };
    this.ns.addNote( note );
    noteText.value = '';
  }

  chooseColor( c ){
    this.color = c;
  }

}
