import { Http, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { ToastController, AlertController, LoadingController } from 'ionic-angular';
import { URL_SERVICIOS, URL_SERVICIOSCRUD } from '../../app/config/url_servicios';
 

@Injectable()
export class CategoriasProvider {

  categorias:any[]=[];
  categorias_solas:any[]=[];
  horarios:any[]=[];
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
      let url=URL_SERVICIOS+"/Listar/categorias/";
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

  cargar_categoriassolas(){

    this.categorias_solas=[];


    let promesa=new Promise( (resolve,reject)=>{
      let url=URL_SERVICIOS+"/Listar/categoriassolas/";
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
                    this.categorias_solas.push(...data.categoria);
                  
                    //this.pagina=this.pagina+1
                  }
                  resolve();
                })
    });

    return promesa;

  }

  cargar_horarios(){

    this.horarios=[];
    let promesa=new Promise( (resolve,reject)=>{
     
      let url=URL_SERVICIOS+"/Listar/horario/";
      this.http.get(url)
                .map( resp => resp.json() )
                .subscribe( data=>{
                  console.log(data);
                  if(data.error)
                  {
                   // this.presentToast("Error al obtener los datos");
                  }
                  else
                  {
                   // this.presentToast("Datos cargados");
                    this.horarios.push(...data.horario);
                    //this.pagina=this.pagina+1
                  }
                  resolve();
                })
    });
 
    return promesa;

  }

  


  insertar(sucursal_idsucursal:any,
    categoria_idcategoria:any,
    horario_idhorario:any)
  {
    let data= new URLSearchParams();
    data.append("sucursal_idsucursal",sucursal_idsucursal);
    data.append("categoria_idcategoria",categoria_idcategoria);
    data.append("horario_idhorario",horario_idhorario);
   
    let url=URL_SERVICIOSCRUD+"chsucursales.php?op=guardaryeditar";
    this.http.post(url,data)
    .subscribe(resp=>{
    console.log(resp.json);
    this.mostar_alerta("Datos enviados","Estamos procesando sus datos");
    });
  }

  
  actualizar(idsucursal_categorias:any,
    sucursal_idsucursal:any,
    categoria_idcategoria:any,
    horario_idhorario:any)
  {
    let data= new URLSearchParams();
    data.append("idsucursal_categorias",idsucursal_categorias);
    data.append("sucursal_idsucursal",sucursal_idsucursal);
    data.append("categoria_idcategoria",categoria_idcategoria);
    data.append("horario_idhorario",horario_idhorario);
   
    let url=URL_SERVICIOSCRUD+"chsucursales.php?op=guardaryeditar";
    this.http.post(url,data)
    .subscribe(resp=>{
    console.log(resp.json);
    this.mostar_alerta("Datos enviados","Estamos procesando sus datos");
    });
  }


  insertar_horario(nombre:any,
    hora_inicio:any,
    hora_fin:any)
  {
    let data= new URLSearchParams();
    data.append("nombre",nombre);
    data.append("hora_inicio",hora_inicio);
    data.append("hora_fin",hora_fin);
   
    let url=URL_SERVICIOSCRUD+"horario.php?op=guardaryeditar";
    this.http.post(url,data)
    .subscribe(resp=>{
    console.log(resp.json);
    this.mostar_alerta("Datos enviados","Estamos procesando sus datos");
    });
  }

  insertar_categoria(nombre_categoria:any,
    descripcion_categoria:any)
  {
    let data= new URLSearchParams();
    data.append("nombre_categoria",nombre_categoria);
    data.append("descripcion_categoria",descripcion_categoria);
 
    let url=URL_SERVICIOSCRUD+"categoria.php?op=guardaryeditar";
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

}
