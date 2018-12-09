import { Injectable } from '@angular/core';
import { Http,Headers, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CompareService {
  public url='https://westcentralus.api.cognitive.microsoft.com/face/v1.0/verify';

  constructor(private http: Http) { }
  compare(face1: string, face2: string){
    const headers= new Headers
    ({
      'Content-Type':'application/json',
      'Ocp-Apim-Subscription-Key':'cafdb8c8ccec4ee98151505e48c6b27e'
    });
   const options = new RequestOptions({headers});
   
  
   return this.http.post(this.url,{faceId1 : face1,faceId2 : face2, },options)
   
         
           
            
          ;
        
}

}



