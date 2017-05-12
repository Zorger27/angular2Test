import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NotesService } from '../_shared/notes.service'

@Component({
  selector: 'note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.sass'],
  providers: [NotesService]
})
export class NoteComponent implements OnInit {

  @Input() note;
  @Input() i;
  @Output() onRmNote = new EventEmitter();


  constructor(
    private ns: NotesService
  ) { }

  ngOnInit() {
  }

  rmNote(){
    this.onRmNote.emit( this.i );
  }

  changeColor( c ){
    this.ns.changeColor( this.i, c )
  }

}
