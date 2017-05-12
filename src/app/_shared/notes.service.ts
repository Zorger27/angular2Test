import { Injectable } from '@angular/core';
import { NOTES } from './notes';

@Injectable()
export class NotesService {

  // constructor() { }

  getNotes(){
    return NOTES;
  }

  addNote( note ){
    NOTES.push( note );
  }

  rmNote( i ){
    NOTES.splice( i, 1 );
  }

  changeColor( i, color ){
    NOTES[i].color = color;
  }

}