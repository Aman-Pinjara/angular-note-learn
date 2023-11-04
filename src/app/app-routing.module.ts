import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotelistComponent } from './notelist/notelist.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: '', component: NotelistComponent},
  {path: 'add-note', component: AddNoteComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
