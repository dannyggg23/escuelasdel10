import { URL_IMG_SLIDER, URL_SERVICIOS } from './../../app/config/url_servicios';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HttpClient } from '@angular/common/http';
import { InformacionAcademiaProvider } from '../../providers/informacion-academia/informacion-academia';
import { Observable } from 'rxjs/Observable';


@IonicPage()
@Component({
  selector: 'page-imagenes-app-admin',
  templateUrl: 'imagenes-app-admin.html',
})
export class ImagenesAppAdminPage {

  urlimagen=URL_IMG_SLIDER;
  base64Image:string="";
  mymodel="segment1";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private camera:Camera,private http:HttpClient,
    private p_informacion:InformacionAcademiaProvider) {
  }

  ionViewDidLoad() {
    this.p_informacion.cargar_imagenes().then(()=>{
      console.log(this.p_informacion.imagenes_app);
    });
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
    if(this.base64Image=="")
    {
      this.p_informacion.mostar_alerta("Error","Verifique los campos vacíos");
    }

    else
    {

      this.p_informacion.subir_imagenes_app(this.base64Image);
      this.base64Image="";

    }
  }

  eliminar(id)
  {
   this.p_informacion.eliminar_aimagenes_app(id);
  }

}



