import { Http, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { ToastController, AlertController, LoadingController } from 'ionic-angular';
import { URL_SERVICIOS, URL_SERVICIOSCRUD } from '../../app/config/url_servicios';
 

@Injectable()
export class EntrenadorestabProvider {

  cursosEntrenador:any[]=[];
  alumnosCurso:any[]=[];
  alumnosCursoAsistencia:any[]=[];
  loadin:any;
 

  constructor(public http: Http,private toastCtrl: ToastController
    ,private alertCtrl:AlertController,private loadingCtrl: LoadingController) {
     
      
    }

    cargar_cursosEntrenador(identrenador:any){

      this.cursosEntrenador=[];
      this.loadin=this.loadingCtrl.create({
        content: "Please wait..."
      });
      let promesa=new Promise( (resolve,reject)=>{
        this.loadin.present();
        let url=URL_SERVICIOS+"/Listar/cursosEntrenador/"+identrenador;
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
                      this.cursosEntrenador.push(...data.cursos);
                      //this.pagina=this.pagina+1
                    }
                    resolve();
                  })
      });
      this.loadin.dismiss();
      return promesa;
    }


    cargar_alumnosCursos(idsucursal_categorias:any){

      this.alumnosCurso=[];
      this.loadin=this.loadingCtrl.create({
        content: "Please wait..."
      });
      let promesa=new Promise( (resolve,reject)=>{
        this.loadin.present();
        let url=URL_SERVICIOS+"/Listar/alumnosCategoria/"+idsucursal_categorias;
        this.http.get(url)
                  .map( resp => resp.json() )
                  .subscribe( data=>{
                    //console.log(data);
                    if(data.error)
                    {
                      this.presentToast("Error al obtener los datos");
                    }
                    else
                    {
                      this.presentToast("Datos cargados");
                      this.alumnosCurso.push(...data.alumnosCategoria);
                      //this.pagina=this.pagina+1
                    }
                    resolve();
                  })
      });
      this.loadin.dismiss();
      return promesa;
    }


    cargar_AsistenciaAlumnosCursos(idsucursal_categorias:any,fecha:any){

      this.alumnosCursoAsistencia=[];
      this.loadin=this.loadingCtrl.create({
        content: "Please wait..."
      });
      let promesa=new Promise( (resolve,reject)=>{
        this.loadin.present();
        let url=URL_SERVICIOS+"/Listar/AsistenciaCursosEntrenador/"+idsucursal_categorias+"/"+fecha;
        this.http.get(url)
                  .map( resp => resp.json() )
                  .subscribe( data=>{
                  //  console.log(data);
                    if(data.error)
                    {
                      this.presentToast("Error al obtener los datos");
                    }
                    else
                    {
                      this.presentToast("Datos cargados");
                      this.alumnosCursoAsistencia.push(...data.alumnos);
                      //this.pagina=this.pagina+1
                    }
                    resolve();
                  })
      });
      this.loadin.dismiss();
      return promesa;
    }

   
    insertar(
      asistencia_alumno:any,
      fecha_asistencia:any,
      ficha_alumno_idficha_alumno:any,
   
           )
          {
            let data= new URLSearchParams();
            data.append("asistencia_alumno",asistencia_alumno);
            data.append("fecha_asistencia",fecha_asistencia);
            data.append("ficha_alumno_idficha_alumno",ficha_alumno_idficha_alumno);

            let url=URL_SERVICIOSCRUD+"asistencia.php?op=guardaryeditar";
            this.http.post(url,data)
            .subscribe(resp=>{
           // console.log(resp.json);
            this.presentToast("Enviado");
              //this.mostar_alerta("Datos enviados",String(resp));
            });
          }

          actualizar_entrenador(
            identrenador:any,
            cedula_entrenador:any,
            nombre_entrenador:any,
            direccion_entrenador:any,
            email_entrenador:any,
            telefono_entrenador:any,
            celular_entrenador:any,
            descripcion:any,
            genero_entrenador:any,
            titulo_entrenador:any,
            fechanacimiento_entrenador:any,
            usuario:any,
            clave:any
                 )
                {
                  let data= new URLSearchParams();
                  data.append("identrenador",identrenador);
                  data.append("cedula_entrenador",cedula_entrenador);
                  data.append("nombre_entrenador",nombre_entrenador);
                  data.append("direccion_entrenador",direccion_entrenador);
                  data.append("email_entrenador",email_entrenador);
                  data.append("telefono_entrenador",telefono_entrenador);
                  data.append("celular_entrenador",celular_entrenador);
                  data.append("genero_entrenador",genero_entrenador);
                  data.append("titulo_entrenador",titulo_entrenador);
                  data.append("fechanacimiento_entrenador",fechanacimiento_entrenador);
                  data.append("descripcion",descripcion);
                  data.append("usuario",usuario);
                  data.append("clave",clave);
                  let url=URL_SERVICIOSCRUD+"entrenador.php?op=actualizar_movil";
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
