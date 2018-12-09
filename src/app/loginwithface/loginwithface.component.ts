import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { async } from 'q';

@Component({
  selector: 'app-loginwithface',
  templateUrl: './loginwithface.component.html',
  styleUrls: ['./loginwithface.component.css']
})
export class LoginwithfaceComponent implements OnInit {
  @ViewChild('video')
  public video: ElementRef;
  @ViewChild('canvas')
  public canvas: ElementRef;
  public captures;
  public image;
  public downloadURL: Observable<string | null>;
  public imagePath;
  i  = Math.floor(Math.random() * 1000);
  storageRef: AngularFireStorageReference;

  constructor( private store: AngularFireStorage ) { }

  ngOnInit() {
  }
  // tslint:disable-next-line:use-life-cycle-interface
  public ngAfterViewInit() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
            this.video.nativeElement.srcObject = stream;
            this.video.nativeElement.play();
        });
    }
}

public send() {
  // tslint:disable-next-line:no-var-keyword
  // tslint:disable-next-line:prefer-const
  let context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 208, 160);
  this.captures = (this.canvas.nativeElement.toDataURL('image/png'));

  console.log(this.captures);
  const blob = this.makeblob(this.captures);
  this.imagePath = 'images/' + (this.i) + '.jpg';
  this.storageRef = this.store.ref(this.imagePath);
   const task = this.storageRef.put(blob);


}


private makeblob(dataURL) {
  const BASE64_MARKER = ';base64,';
  const parts = dataURL.split(BASE64_MARKER);
  const contentType = parts[0].split(':')[1];
  const raw = window.atob(parts[1]);
  const rawLength = raw.length;
  const uInt8Array = new Uint8Array(rawLength);

  for (let i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }

  return new Blob([uInt8Array], { type: contentType });
}


getvalues() {

  const ref = this.store.ref('users/davideast.jpg');
     this.image = ref.getDownloadURL();
  console.log( this.image );
}




}
