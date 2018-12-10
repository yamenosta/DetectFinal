import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaceComponent } from './face/face.component';
import { DataService } from './data.service';
import { HttpModule } from '@angular/http';
import { Http, Headers, RequestOptions } from '@angular/http';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FaceRecognitionService } from './face-recognition.service';
import { CamComponent } from './cam/cam.component';
import { MheaderComponent } from './mheader/mheader.component';
import { CompareComponent } from './compare/compare.component';
import { MfooterComponent } from './mfooter/mfooter.component';
import { LoginfaceComponent } from './loginface/loginface.component';
import { LoginwithfaceComponent } from './loginwithface/loginwithface.component';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { Face2Component } from './face2/face2.component';
import { DatabaseComponent } from './database/database.component';

@NgModule({
  declarations: [
    AppComponent,
    FaceComponent,
    CamComponent,
    MheaderComponent,
    CompareComponent,
    MfooterComponent,
    LoginfaceComponent,
    LoginwithfaceComponent,
    Face2Component,
    DatabaseComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AngularFireStorageModule
  ],
  providers: [
    DataService,
    FaceRecognitionService,
    AngularFireDatabase
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
