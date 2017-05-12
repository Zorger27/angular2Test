import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NoteEditorComponent } from './note-editor/note-editor.component';
import { HeaderComponent } from './header/header.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteComponent } from './note/note.component';
import { ColorEditorComponent } from './color-editor/color-editor.component';
import { NotesComponent } from './notes/notes.component';
import { StartComponent } from './start/start.component';
import { UsersComponent } from './users/users.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteEditorComponent,
    HeaderComponent,
    NotesListComponent,
    NoteComponent,
    ColorEditorComponent,
    NotesComponent,
    StartComponent,
    UsersComponent,
    NavbarComponent,
    UserDetailsComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'notes',
        component: NotesComponent
      },
      {
        path: '',
        component: StartComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'posts/:id',
        component: PostsComponent
      },
      {
        path: 'posts',
        component: PostsComponent
      } 
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
