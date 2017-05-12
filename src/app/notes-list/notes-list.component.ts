import { Component, OnInit } from '@angular/core';
import { NotesService } from '../_shared/notes.service';

@Component({
  selector: 'notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.sass'],
  providers: [NotesService]
})
export class NotesListComponent implements OnInit {
  
  notes;

  constructor(
    private ns: NotesService
  ) { }

  ngOnInit() {
    this.getNotes()
  }

  getNotes(){
    this.notes = this.ns.getNotes();
  }

  rmNote( i ){
    this.ns.rmNote( i );
  }

}
