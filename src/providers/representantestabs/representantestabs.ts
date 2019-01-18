import { Http, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { ToastController, AlertController, LoadingController } from 'ionic-angular';
import { URL_SERVICIOS, URL_SERVICIOSCRUD } from '../../app/config/url_servicios';
 


@Injectable()
export class RepresentantestabsProvider {

  alumnosRepresentante:any[]=[];
  depositosRepresentante:any[]=[];
  AistenciaAlumnosR:any[]=[];
  loadin:any;

  constructor(public http: Http,private toastCtrl: ToastController
    ,private alertCtrl:AlertController,private loadingCtrl: LoadingController) {
     
      
    }

    cargar_alumnosRepresentante(idrepresentante:any){

      this.alumnosRepresentante=[];
      this.loadin=this.loadingCtrl.create({
        content: "Please wait..."
      });
      let promesa=new Promise( (resolve,reject)=>{
        this.loadin.present();
        let url=URL_SERVICIOS+"/Listar/AlumnosRepresentante/"+idrepresentante;
        this.http.get(url)
                  .map( resp => resp.json() )
                  .subscribe( data=>{
                   
                   // console.log(data);
                    if(data.error)
                    {
                      this.presentToast("Error al obtener los datos");
                    }
                    else
                    {
                      this.presentToast("Datos cargados");
                      this.alumnosRepresentante.push(...data.alumnos);
                      //this.pagina=this.pagina+1
                    }
                    resolve();
                  })
      });
      this.loadin.dismiss();
      return promesa;
    }

    cargar_depositos(idrepresentante:any){

      this.depositosRepresentante=[];
      this.loadin=this.loadingCtrl.create({
        content: "Please wait..."
      });
      let promesa=new Promise( (resolve,reject)=>{
        this.loadin.present();
        let url=URL_SERVICIOS+"/Listar/imagenesDepositos/"+idrepresentante;
        this.http.get(url)
                  .map( resp => resp.json() )
                  .subscribe( data=>{
                   
                   // console.log(data);
                    if(data.error)
                    {
                      this.presentToast("Error al obtener los datos");
                    }
                    else
                    {
                      this.presentToast("Datos cargados");
                      this.depositosRepresentante.push(...data.depositos);
                      //this.pagina=this.pagina+1
                    }
                    resolve();
                  })
      });
      this.loadin.dismiss();
      return promesa;
    }

    cargar_AsistenciaAlumnosRepresentante(idalumno:any){

      this.AistenciaAlumnosR=[];
      this.loadin=this.loadingCtrl.create({
        content: "Please wait..."
      });
      let promesa=new Promise( (resolve,reject)=>{
        this.loadin.present();
        let url=URL_SERVICIOS+"/Listar/AsistenciaAlumnosRepresentante/"+idalumno;
        this.http.get(url)
                  .map( resp => resp.json() )
                  .subscribe( data=>{
                   
                   // console.log(data);
                    if(data.error)
                    {
                      this.presentToast("Error al obtener los datos");
                    }
                    else
                    {
                      this.presentToast("Datos cargados");
                      this.AistenciaAlumnosR.push(...data.asistencias);
                      //this.pagina=this.pagina+1
                    }
                    resolve();
                  })
      });
      this.loadin.dismiss();
      return promesa;
    }


    actualizar_representante( 
      idrepresentante:any,
      cedula_representante:any,
      nombre_representante:any,
      email_representante:any,
      direccion_representante:any,
      telefono_representante:any,
      genero_representante:any,
      fecha_nacimiento_representante:any,
      parentesco_respresentante:any,
      celular_representante:any,
      lugar_trabajo_representante:any,
      cedula_conyugue_representante:any,
      nombre_conyugue_representante:any,
      barrio_representante:any,
      ciudad_representante:any,
      usuario:any,
      clave:any
      )
      
      {

        let data= new URLSearchParams();
        data.append("idrepresentante",idrepresentante);
        data.append("cedula_representante",cedula_representante);
        data.append("nombre_representante",nombre_representante);
        data.append("email_representante",email_representante);
        data.append("direccion_representante",direccion_representante);
        data.append("telefono_representante",telefono_representante);
        data.append("genero_representante",genero_representante);
        data.append("fecha_nacimiento_representante",fecha_nacimiento_representante);
        data.append("parentesco_respresentante",parentesco_respresentante);
        data.append("celular_representante",celular_representante);
        data.append("lugar_trabajo_representante",lugar_trabajo_representante);
        data.append("cedula_conyugue_representante",cedula_conyugue_representante);
        data.append("nombre_conyugue_representante",nombre_conyugue_representante);
        data.append("barrio_representante",barrio_representante);
        data.append("ciudad_representante",ciudad_representante);
        data.append("usuario",usuario);
        data.append("clave",clave);
      
    
        let url=URL_SERVICIOSCRUD+"representante.php?op=actualizar_movil";
        this.http.post(url,data)
        .subscribe(resp=>{
        console.log(resp.json);
        this.mostar_alerta("Datos enviados","Estamos procesando sus datos");
        });

    }

    insertar_alumno(
     
idalumno:any,
cedula_alumno:any,
nombre_alumno:any,
genero_alumno:any,
representante_idrepresentante:any,
tipo_sangre_alumno:any,
escuela_alumno:any,
fecha_nacimiento:any,
posicion_alumno:any,
peso_alumno:any,
talla_alumno:any,
informacion_alumno:any
     
           )
           
          {
            let data= new URLSearchParams();
            data.append("idalumno",idalumno);
            data.append("cedula_alumno",cedula_alumno);
            data.append("nombre_alumno",nombre_alumno);
            data.append("genero_alumno",genero_alumno);
            data.append("representante_idrepresentante",representante_idrepresentante);
            data.append("tipo_sangre_alumno",tipo_sangre_alumno);
            data.append("escuela_alumno",escuela_alumno);
            data.append("fecha_nacimiento",fecha_nacimiento);
            data.append("posicion_alumno",posicion_alumno);
            data.append("peso_alumno",peso_alumno);
            data.append("talla_alumno",talla_alumno);
            data.append("informacion_alumno",informacion_alumno);
            data.append("bandera","false");
            data.append("imagen","default.jpg");
            data.append("imagenactual","default.jpg");
            let url=URL_SERVICIOSCRUD+"alumno.php?op=guardaryeditar";
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
       // console.log('Dismissed toast');
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
