import { Http, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { ToastController, AlertController, LoadingController } from 'ionic-angular';
import { URL_SERVICIOS } from '../../app/config/url_servicios';
 

@Injectable()
export class InformacionAcademiaProvider {


  categorias:any[]=[];
  horarios:any[]=[];
  noticias:any[]=[];
  imagenes_app:any[]=[];
  entrenadores:any[]=[];
  SucCatHora:any[]=[];

  
  loadin:any;

  constructor(public http: Http,private toastCtrl: ToastController
    ,private alertCtrl:AlertController,private loadingCtrl: LoadingController) {
     
  }


  cargar_categorias(){

    this.categorias=[];

    this.loadin=this.loadingCtrl.create({
      content: "Please wait..."
    });

    let promesa=new Promise( (resolve,reject)=>{
      this.loadin.present();
      let url=URL_SERVICIOS+"/Listar/CategoriasDisponiblesInfo/";
      this.http.get(url)
                .map( resp => resp.json() )
                .subscribe( data=>{
                  console.log(data);
                  if(data.error)
                  {
                    this.presentToast("Error al obtener los datos");
                  }
                  else
                  {
                    this.presentToast("Datos cargados");
                    this.categorias.push(...data.categorias);
                    //this.pagina=this.pagina+1
                  }
                  resolve();
                })
    });
    this.loadin.dismiss();
    return promesa;

  }

  SucCatHor(){

    this.SucCatHora=[];

    this.loadin=this.loadingCtrl.create({
      content: "Please wait..."
    });

    let promesa=new Promise( (resolve,reject)=>{
      this.loadin.present();
      let url=URL_SERVICIOS+"/Listar/SucCatHorInfo/";
      this.http.get(url)
                .map( resp => resp.json() )
                .subscribe( data=>{
                  console.log(data);
                  if(data.error)
                  {
                    this.presentToast("Error al obtener los datos");
                  }
                  else
                  {
                    this.presentToast("Datos cargados");
                    this.SucCatHora.push(...data.SucCatHor);
                    //this.pagina=this.pagina+1
                  }
                  resolve();
                })
    });
    this.loadin.dismiss();
    return promesa;

  }


  cargar_imagenes(){

    this.imagenes_app=[];

    this.loadin=this.loadingCtrl.create({
      content: "Please wait..."
    });

    let promesa=new Promise( (resolve,reject)=>{
      this.loadin.present();
      let url=URL_SERVICIOS+"/Listar/imagenesApp/";
      this.http.get(url)
                .map( resp => resp.json() )
                .subscribe( data=>{
                  console.log(data);
                  if(data.error)
                  {
                    this.presentToast("Error al obtener los datos");
                  }
                  else
                  {
                    this.presentToast("Datos cargados");
                    this.imagenes_app.push(...data.imagenes);
                    //this.pagina=this.pagina+1
                  }
                  resolve();
                })
    });
    this.loadin.dismiss();
    return promesa;

  }

  cargar_horarios(){

    this.horarios=[];

    this.loadin=this.loadingCtrl.create({
      content: "Please wait..."
    });

    let promesa=new Promise( (resolve,reject)=>{
      this.loadin.present();
      let url=URL_SERVICIOS+"/Listar/HorariosDisponiblesInfo/";
      this.http.get(url)
                .map( resp => resp.json() )
                .subscribe( data=>{
                  console.log(data);
                  if(data.error)
                  {
                    this.presentToast("Error al obtener los datos");
                  }
                  else
                  {
                    this.presentToast("Datos cargados");
                    this.horarios.push(...data.horarios);
                    //this.pagina=this.pagina+1
                  }
                  resolve();
                })
    });
    this.loadin.dismiss();
    return promesa;

  }

  cargar_entrenadores(){

    this.entrenadores=[];

    this.loadin=this.loadingCtrl.create({
      content: "Please wait..."
    });

    let promesa=new Promise( (resolve,reject)=>{
      this.loadin.present();
      let url=URL_SERVICIOS+"/Listar/EntrenadoresDisponiblesInfo/";
      this.http.get(url)
                .map( resp => resp.json() )
                .subscribe( data=>{
                  console.log(data);
                  if(data.error)
                  {
                    this.presentToast("Error al obtener los datos");
                  }
                  else
                  {
                    this.presentToast("Datos cargados");
                    this.entrenadores.push(...data.entrenadores);
                    //this.pagina=this.pagina+1
                  }
                  resolve();
                })
    });
    this.loadin.dismiss();
    return promesa;

  }

  cargar_noticias(){

    this.noticias=[];

    this.loadin=this.loadingCtrl.create({
      content: "Please wait..."
    });

    let promesa=new Promise( (resolve,reject)=>{
      this.loadin.present();
      let url=URL_SERVICIOS+"/Listar/NoticiasDisponiblesInfo/";
      this.http.get(url)
                .map( resp => resp.json() )
                .subscribe( data=>{
                  console.log(data);
                  if(data.error)
                  {
                    this.presentToast("Error al obtener los datos");
                  }
                  else
                  {
                    this.presentToast("Datos cargados");
                    this.noticias.push(...data.noticias);
                    //this.pagina=this.pagina+1
                  }
                  resolve();
                })
    });
    this.loadin.dismiss();
    return promesa;

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
