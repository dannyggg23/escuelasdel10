import { Http, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { ToastController, AlertController, LoadingController } from 'ionic-angular';
import { URL_SERVICIOS, URL_SERVICIOSCRUD } from '../../app/config/url_servicios';
 


@Injectable()
export class SucursalesProvider {

  sucursales:any[]=[];
  categorias:any[]=[];
  ciudades:any[]=[];
  pagina:number=0;
  loadin:any;

  constructor(public http: Http,private toastCtrl: ToastController
    ,private alertCtrl:AlertController,private loadingCtrl: LoadingController) {
     
  }

  cargar_todos(){

    this.sucursales=[];

    this.loadin=this.loadingCtrl.create({
      content: "Please wait..."
    });

    let promesa=new Promise( (resolve,reject)=>{
      this.loadin.present();
      let url=URL_SERVICIOS+"/Listar/sucursales/";
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
                    this.sucursales.push(...data.sucursales);
                  
                    //this.pagina=this.pagina+1
                  }
                  resolve();
                
                 
                })
    });
    this.loadin.dismiss();
    return promesa;

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

  cargar_ciudades(){

    this.ciudades=[];

    this.loadin=this.loadingCtrl.create({
      content: "Please wait..."
    });

    let promesa=new Promise( (resolve,reject)=>{
      this.loadin.present();
      let url=URL_SERVICIOS+"/Listar/ciudades/";
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
                    this.ciudades.push(...data.ciudad);
                    //this.pagina=this.pagina+1
                  }
                  resolve();
                })
    });
    this.loadin.dismiss();
    return promesa;

  }


  insertar_producto(nombre_sucursal:any,
    direrccion_ducursal:any,
    telefono_sucursal:any,
    encargado_sucursal:any,
    ciudad_idCiudad:any,
    latitud_sucursal:any,
    longitud_sucursal:any)
  {
    let data= new URLSearchParams();
    data.append("nombre_sucursal",nombre_sucursal);
    data.append("direrccion_ducursal",direrccion_ducursal);
    data.append("telefono_sucursal",telefono_sucursal);
    data.append("encargado_sucursal",encargado_sucursal);
    data.append("ciudad_idCiudad",ciudad_idCiudad);
    data.append("latitud_sucursal",latitud_sucursal);
    data.append("longitud_sucursal",longitud_sucursal);
    data.append("imagen","default.jpg");
    data.append("imagenactual","default.jpg");
    let url=URL_SERVICIOSCRUD+"sucursal.php?op=guardaryeditar";
    this.http.post(url,data)
    .subscribe(resp=>{
     // let respuesta=resp.json();
    console.log(resp.json);

    this.mostar_alerta("Datos enviados","Estamos procesando sus datos");

      // if(respuesta=="No se pudo registrar")
      // {
      //   this.mostar_alerta("Eroor al registrar",respuesta);
      // }
      // else
      // {
      //   this.mostar_alerta("Producto registrado","Su producto se a registrado con éxito");
      // }
    });
  }

  
  actualizar_producto(idsucursal:any,nombre_sucursal:any,
    direrccion_ducursal:any,
    telefono_sucursal:any,
    encargado_sucursal:any,
    ciudad_idCiudad:any,
    latitud_sucursal:any,
    longitud_sucursal:any)
  {
    let data= new URLSearchParams();
    data.append("idsucursal",idsucursal);
    data.append("nombre_sucursal",nombre_sucursal);
    data.append("direrccion_ducursal",direrccion_ducursal);
    data.append("telefono_sucursal",telefono_sucursal);
    data.append("encargado_sucursal",encargado_sucursal);
    data.append("ciudad_idCiudad",ciudad_idCiudad);
    data.append("latitud_sucursal",latitud_sucursal);
    data.append("longitud_sucursal",longitud_sucursal);
    data.append("imagen","default.jpg");
    data.append("imagenactual","default.jpg");
    let url=URL_SERVICIOSCRUD+"sucursal.php?op=guardaryeditar";
    this.http.post(url,data)
    .subscribe(resp=>{
     // let respuesta=resp.json();
    console.log(resp.json);

    this.mostar_alerta("Datos enviados","Estamos procesando sus datos");
      // if(respuesta=="No se pudo registrar")
      // {
      //   this.mostar_alerta("Eroor al registrar",respuesta);
      // }
      // else
      // {
      //   this.mostar_alerta("Producto registrado","Su producto se a registrado con éxito");
      // }
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

}
