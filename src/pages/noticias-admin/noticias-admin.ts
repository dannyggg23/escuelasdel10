import { URL_IMG_NOTICIA, URL_SERVICIOS } from './../../app/config/url_servicios';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Camera,CameraOptions } from '@ionic-native/camera';
import { InformacionAcademiaProvider } from '../../providers/informacion-academia/informacion-academia';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-noticias-admin',
  templateUrl: 'noticias-admin.html',
})
export class NoticiasAdminPage {

  mymodel="segment1";
  idrepresentante:any="";

  titulo:any="";
  fecha:any="";
  descripcion:any="";
  urlimagen=URL_IMG_NOTICIA;
  base64Image:string="";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private camera:Camera,private http:HttpClient,
    private p_informacion:InformacionAcademiaProvider) {
  }

  ionViewDidLoad() {
    this.p_informacion.cargar_noticias();
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
    if(this.titulo=="" || 
    this.base64Image=="" || 
    this.fecha=="" || 
    this.descripcion=="")
    {
      this.p_informacion.mostar_alerta("Error","Verifique los campos vacíos");
    }

    else
    {
      this.p_informacion.subir_imagenes_noticias(this.base64Image,this.fecha,this.titulo,this.descripcion);
      this.titulo="";
      this.base64Image="";
      this.fecha="";
      this.descripcion="";
    }
  }

  activar(id)
  {

  }

  desactivar(id){

  }

}
