import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaceComponent } from './face/face.component';
import { CamComponent } from './cam/cam.component';
import { CompareComponent } from './compare/compare.component';
import { Face2Component } from './face2/face2.component';
import { DatabaseComponent } from './database/database.component';

const routes: Routes = [
  { path: 'face', component: Face2Component},
  { path: 'cam', component: CamComponent},
  { path: 'compare', component: CompareComponent},
  { path: 'database', component: DatabaseComponent},
  { path: '', component: Face2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
