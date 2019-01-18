import { URL_SERVICIOS } from './../../app/config/url_servicios';
import { Http, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { ToastController,AlertController } from 'ionic-angular';



@Injectable()
export class LoginProvider {

  constructor(public http: Http,private toastCtrl: ToastController
    ,private alertCtrl:AlertController) {
   
  }


  login(usuario:string,clave:string,tipo:string)
  {
    let data = new URLSearchParams();
    data.append("usuario",usuario );
    data.append("clave",clave);
    data.append("tipo",tipo);
    let url = URL_SERVICIOS+"/login";
   return this.http.post( url, data);
  }

  token(id:string,token:string,tabla:string)
  {
    let data = new URLSearchParams();
    data.append("id",id );
    data.append("token",token);
    data.append("tabla",tabla);
    let url = URL_SERVICIOS+"/login/token";
   return this.http.post( url, data); 
  }


  presentToast(mensaje:string) {
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom'
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }

  mostar_alerta(titulo,mensaje)
  {
    this.alertCtrl.create({
      title:titulo ,
      subTitle:mensaje,
      buttons: ["OK"]
    }).present();

  }


}
