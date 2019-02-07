import { Http, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { ToastController, AlertController, LoadingController } from 'ionic-angular';
import { URL_SERVICIOS, URL_SERVICIOSCRUD } from '../../app/config/url_servicios';
 

@Injectable()
export class NotificacionesProvider {

notificaciones:any[]=[];
loadin:any;

  constructor(public http: Http,private toastCtrl: ToastController
    ,private alertCtrl:AlertController,private loadingCtrl: LoadingController) {
  
    }

  todos(mensaje:any,
    titulo:any,
    subtitulo:any)
  {
    let data= new URLSearchParams();
    data.append("mensaje",mensaje);
    data.append("titulo",titulo);
    data.append("subtitulo",subtitulo);
   
    let url=URL_SERVICIOS+"/notificaciones/todos/";
    this.http.post(url,data)
    .subscribe(resp=>{
    console.log(resp.json);
    this.mostar_alerta("Datos enviados","Estamos procesando sus datos");
    });
  }

  sucursal(sucursal_idsucursal:any,
    mensaje:any,
    titulo:any,
    subtitulo:any)
  {
    let data= new URLSearchParams();
    data.append("mensaje",mensaje);
    data.append("titulo",titulo);
    data.append("subtitulo",subtitulo);
    data.append("sucursal_idsucursal",sucursal_idsucursal);
   
    let url=URL_SERVICIOS+"/notificaciones/";
    this.http.post(url,data)
    .subscribe(resp=>{
    console.log(resp.json);
    this.mostar_alerta("Datos enviados","Estamos procesando sus datos");
    });
  }

  
  curso(sucursal_categorias_idsucursal_categorias:any,
    mensaje:any,
    titulo:any,
    subtitulo:any)
  {
    let data= new URLSearchParams();
    data.append("mensaje",mensaje);
    data.append("titulo",titulo);
    data.append("subtitulo",subtitulo);
    data.append("sucursal_categorias_idsucursal_categorias",sucursal_categorias_idsucursal_categorias);
   
    let url=URL_SERVICIOS+"/notificaciones/curso";
    this.http.post(url,data)
    .subscribe(resp=>{
    console.log(resp.json);
    this.mostar_alerta("Datos enviados","Estamos procesando sus datos");
    });
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

  cargarNotificaciones(){
    this.notificaciones=[];
    this.loadin=this.loadingCtrl.create({
      content: "Please wait..."
    });
    let promesa=new Promise( (resolve,reject)=>{
      this.loadin.present();
      let url=URL_SERVICIOS+"/Listar/listaNotificaciones";
      this.http.get(url)
                .map( resp => resp.json() )
                .subscribe( data=>{
                  console.log(data);
                  if(data.error)
                  {
                    //this.presentToast("Error al obtener los datos");
                  }
                  else
                  {
                    //this.presentToast("Datos cargados");
                    this.notificaciones.push(...data.notificaciones);
                  }
                  resolve();
                })
    });
    this.loadin.dismiss();
    return promesa;
  }


}
