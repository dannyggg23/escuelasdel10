import { Http, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { ToastController, AlertController, LoadingController } from 'ionic-angular';
import { URL_SERVICIOS, URL_SERVICIOSCRUD } from '../../app/config/url_servicios';
 
@Injectable()
export class EntrenadoresProvider {

  fichaentrenadores:any[]=[];
  categoriasdisponibles:any[]=[];
  entrenadores:any[]=[];
  horarios:any[]=[];
  categoriashorariosucursales:any[]=[];
  loadin:any;

  constructor(public http: Http,private toastCtrl: ToastController
    ,private alertCtrl:AlertController,private loadingCtrl: LoadingController) {
  
    }


    cargar_fichaentrenadores(){

      this.fichaentrenadores=[];
      this.loadin=this.loadingCtrl.create({
        content: "Please wait..."
      });
      let promesa=new Promise( (resolve,reject)=>{
        this.loadin.present();
        let url=URL_SERVICIOS+"/Listar/fichaentrenador/";
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
                      this.fichaentrenadores.push(...data.fichaentrenador);
                      //this.pagina=this.pagina+1
                    }
                    resolve();
                  })
      });
      this.loadin.dismiss();
      return promesa;
    }

    cargar_fichaentrenadores1(){
      
      this.fichaentrenadores=[];
     
      let promesa=new Promise( (resolve,reject)=>{
       
        let url=URL_SERVICIOS+"/Listar/fichaentrenador/";
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
                      this.fichaentrenadores.push(...data.fichaentrenador);
                      //this.pagina=this.pagina+1
                    }
                    resolve();
                  })
      });
     
      return promesa;
    }
  
    cargar_categoriasdisponibles(){
      this.categoriasdisponibles=[];
      this.loadin=this.loadingCtrl.create({
        content: "Please wait..."
      });
      let promesa=new Promise( (resolve,reject)=>{
        this.loadin.present();
        let url=URL_SERVICIOS+"/Listar/categoriasdisponibles/";
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
                      this.categoriasdisponibles.push(...data.categoriadisponible);
                    
                      //this.pagina=this.pagina+1
                    }
                    resolve();
                  })
      });
      this.loadin.dismiss();
      return promesa;
    }

    categoriashorariosucursal(){
    
      let promesa=new Promise( (resolve,reject)=>{
      
        let url=URL_SERVICIOS+"/Listar/categoriashorariosucursal/";
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
                      this.categoriashorariosucursales.push(...data.categoriashorariosucursal);
                    
                      //this.pagina=this.pagina+1
                    }
                    resolve();
                  })
      });
     
      return promesa;
    }


    cargar_entrenadores(){
      this.entrenadores=[];
      let promesa=new Promise( (resolve,reject)=>{
        let url=URL_SERVICIOS+"/Listar/entrenadores/";
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
                      this.entrenadores.push(...data.entrenador);
                      //this.pagina=this.pagina+1
                    }
                    resolve();
                  })
      });
      return promesa;
    }
  
 
  
    insertar(
cedula_entrenador:any,
nombre_entrenador:any,
direccion_entrenador:any,
email_entrenador:any,
telefono_entrenador:any,
celular_entrenador:any,
genero_entrenador:any,
titulo_entrenador:any,
fechanacimiento_entrenador:any,
idsucursal_categorias:any
     )
    {
      let data= new URLSearchParams();
      data.append("cedula_entrenador",cedula_entrenador);
      data.append("nombre_entrenador",nombre_entrenador);
      data.append("direccion_entrenador",direccion_entrenador);
      data.append("email_entrenador",email_entrenador);
      data.append("telefono_entrenador",telefono_entrenador);
      data.append("celular_entrenador",celular_entrenador);
      data.append("genero_entrenador",genero_entrenador);
      data.append("titulo_entrenador",titulo_entrenador);
      data.append("fechanacimiento_entrenador",fechanacimiento_entrenador);
      data.append("idsucursal_categorias",idsucursal_categorias);
      data.append("bandera","true");
      data.append("imagen","default.jpg");
      data.append("imagenactual","default.jpg");
     
      let url=URL_SERVICIOSCRUD+"entrenador.php?op=guardaryeditar";
      this.http.post(url,data)
      .subscribe(resp=>{
      console.log(resp.json);
      this.mostar_alerta("Datos enviados","Estamos procesando sus datos");
      });
    }

    desactivar(idficha_entrenador:any,idsucursal_categorias:any)
          {
            let data= new URLSearchParams();
            data.append("idficha_entrenador",idficha_entrenador);
            data.append("idsucursal_categorias",idsucursal_categorias);
            let url=URL_SERVICIOSCRUD+"ficha_entrenador.php?op=desactivar";
            this.http.post(url,data)
            .subscribe(resp=>{
            console.log(resp.json);
            this.mostar_alerta("Datos enviados","Estamos procesando sus datos");
            });
          }

          
  insertar_ficha(
    entrenador_identrenador:any,
    idsucursal_categorias:any)
  {
    let data= new URLSearchParams();
    data.append("idsucursal_categorias",idsucursal_categorias);
    data.append("entrenador_identrenador",entrenador_identrenador);
 
    let url=URL_SERVICIOSCRUD+"ficha_entrenador.php?op=guardaryeditar";
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
