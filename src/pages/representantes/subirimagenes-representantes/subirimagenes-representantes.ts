import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {  HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { URL_SERVICIOS, URL_IMG_DEPOSITOS } from '../../../app/config/url_servicios';
import { InformacionAcademiaProvider } from '../../../providers/informacion-academia/informacion-academia';
import { Storage } from '@ionic/storage';
import { RepresentantestabsProvider } from '../../../providers/representantestabs/representantestabs';


@Component({
  selector: 'page-subirimagenes-representantes',
  templateUrl: 'subirimagenes-representantes.html',
})
export class SubirimagenesRepresentantesPage {
  mymodel="segment1";
  idrepresentante:any="";

  fecha:any="";
  ficha_alumno_idficha_alumno:any="";
  descripcion:any="";
  imgdeposito=URL_IMG_DEPOSITOS;
  base64Image:string="";
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private camera:Camera,private http:HttpClient,
    private p_informacion:InformacionAcademiaProvider,
    private storage:Storage,
    private p_representantestab:RepresentantestabsProvider) {
  }

  ionViewDidLoad() {
    this.storage.get('representante').then((data)=>{
      this.idrepresentante=data.idrepresentante;
      this.p_representantestab.cargar_alumnosRepresentante(data.idrepresentante).then(()=>{
      this.p_representantestab.cargar_depositos(this.idrepresentante);
      
      });
     })

  }
  

  openCamera()
  {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });

  }

  openGalery()
  {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType:this.camera.PictureSourceType.PHOTOLIBRARY
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });

  }

  uoloadImage()
  {
    if(this.ficha_alumno_idficha_alumno=="" || 
    this.base64Image=="" || 
    this.fecha=="" || 
    this.descripcion=="")
    {
      this.p_informacion.mostar_alerta("Error","Verifique los campos vacíos");
    }

    else
    {

      let url=URL_SERVICIOS+"Pagos/pagoImg";
      let postData=new FormData();
      postData.append('file',this.base64Image);
      postData.append('fecha',this.fecha);
      postData.append('ficha_alumno_idficha_alumno',this.ficha_alumno_idficha_alumno);
      postData.append('descripcion',this.descripcion);
      let data:Observable<any>=this.http.post(url,postData);
      // data.map( resp => resp.json())
              data.subscribe(datos=>{
                console.log(datos);
this.ficha_alumno_idficha_alumno="";
this.base64Image="";
this.fecha="";
this.descripcion="";

this.p_informacion.mostar_alerta("Datos enviados","se esta procesando su orden");
//window.location.reload(true);
              
      });

    }
  }

  
}
