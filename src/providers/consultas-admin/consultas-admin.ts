import { Http, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { ToastController, AlertController, LoadingController } from 'ionic-angular';
import { URL_SERVICIOS, URL_SERVICIOSCRUD } from '../../app/config/url_servicios';



@Injectable()
export class ConsultasAdminProvider {

  pagos_por_representante:any[]=[];
  pagos_por_alumno:any[]=[];
  datos_por_alumno:any[]=[];
  asistencia_por_alumno:any[]=[];
  detalle_de_pago:any[]=[];
  deudores:any[]=[];

  alumnos_nombre:any[]=[];
  
  loadin:any;

  constructor(public http: Http,private toastCtrl: ToastController
    ,private alertCtrl:AlertController,private loadingCtrl: LoadingController) {
  
    }

    cargar_pagos_por_representante(representante:any){

      this.pagos_por_representante=[];
  
      this.loadin=this.loadingCtrl.create({
        content: "Please wait..."
      });
  
      let promesa=new Promise( (resolve,reject)=>{
        this.loadin.present();
        let url=URL_SERVICIOS+"/Listar/pagoPorRepresentante/"+representante;
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
                      this.pagos_por_representante.push(...data.pagos);
                    
                      //this.pagina=this.pagina+1
                    }
                    resolve();
                  })
      });
      this.loadin.dismiss();
      return promesa;
  
    }

    cargar_pagos_por_alumno(alumno:any){

      this.pagos_por_alumno=[];
  
      this.loadin=this.loadingCtrl.create({
        content: "Please wait..."
      });
  
      let promesa=new Promise( (resolve,reject)=>{
        this.loadin.present();
        let url=URL_SERVICIOS+"/Listar/pagoPorAlumno/"+alumno;
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
                      this.pagos_por_alumno.push(...data.pagos);
                    
                      //this.pagina=this.pagina+1
                    }
                    resolve();
                  })
      });
      this.loadin.dismiss();
      return promesa;
  
    }


    cargar_datos_por_alumno(alumno:any){

      this.datos_por_alumno=[];
  
      this.loadin=this.loadingCtrl.create({
        content: "Please wait..."
      });
  
      let promesa=new Promise( (resolve,reject)=>{
        this.loadin.present();
        let url=URL_SERVICIOS+"/Listar/datosAlumnosIdalumno/"+alumno;
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
                      this.datos_por_alumno.push(...data.datos);
                    
                      //this.pagina=this.pagina+1
                    }
                    resolve();
                  })
      });
      this.loadin.dismiss();
      return promesa;
  
    }


    cargar_asistencia_por_alumno(alumno:any){

      this.asistencia_por_alumno=[];
  
      this.loadin=this.loadingCtrl.create({
        content: "Please wait..."
      });
  
      let promesa=new Promise( (resolve,reject)=>{
        this.loadin.present();
        let url=URL_SERVICIOS+"/Listar/asistenciaAlumnosAdmi/"+alumno;
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
                      this.asistencia_por_alumno.push(...data.asistencia);
                    
                      //this.pagina=this.pagina+1
                    }
                    resolve();
                  })
      });
      this.loadin.dismiss();
      return promesa;
  
    }
    


    cargar_detalle_de_pago(idpago:any){

      this.detalle_de_pago=[];
  
      this.loadin=this.loadingCtrl.create({
        content: "Please wait..."
      });
  
      let promesa=new Promise( (resolve,reject)=>{
        this.loadin.present();
        let url=URL_SERVICIOS+"/Listar/detallePago/"+idpago;
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
                      this.detalle_de_pago.push(...data.detallePagos);
                    
                      //this.pagina=this.pagina+1
                    }
                    resolve();
                  })
      });
      this.loadin.dismiss();
      return promesa;
  
    }

    cargar_deudores(id:any){

      this.deudores=[];
  
      this.loadin=this.loadingCtrl.create({
        content: "Please wait..."
      });
  
      let promesa=new Promise( (resolve,reject)=>{
        this.loadin.present();
        let url=URL_SERVICIOS+"/Listar/deudoresSucursal/"+id;
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
                      this.deudores.push(...data.deudores);
                    
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

    // Busqueda de alumnos por nombre

    busquedaAlumnosNombre(nombre_alumno:any){

      this.alumnos_nombre=[];
  
      this.loadin=this.loadingCtrl.create({
        content: "Please wait..."
      });
  
      let promesa=new Promise( (resolve,reject)=>{
        this.loadin.present();
        let url=URL_SERVICIOS+"/Listar/busquedaAlumnos/"+nombre_alumno;
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
                      this.alumnos_nombre.push(...data.alumnos);
                    
                      //this.pagina=this.pagina+1
                    }
                    resolve();
                  })
      });
      this.loadin.dismiss();
      return promesa;
  
    }

}
