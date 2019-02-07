import { AdminAlumnoPage } from './../admin-alumno';
import { AlumnosProvider } from './../../../../providers/alumnos/alumnos';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { SucursalesProvider } from '../../../../providers/sucursales/sucursales';

@Component({
  selector: 'page-modal-crear-alumno',
  templateUrl: 'modal-crear-alumno.html',
})
export class ModalCrearAlumnoPage {
//ALUMNO
idsucursal_categorias:any="";
cedula_alumno:any="";
nombre_alumno:any="";
genero_alumno:any="";
representante_idrepresentante:any="";
tipo_sangre_alumno:any="";
escuela_alumno:any="";
fecha_nacimiento:any="";
posicion_alumno:any="";
peso_alumno:any="";
talla_alumno:any="";
informacion_alumno:any="";
descuento_ficha_alumno:any="";
bandera:Boolean=false;
//REPRESNTANTE
//idrepresentante:any="";
cedula_representante:any="";
nombre_representante:any="";
email_representante:any="";
direccion_representante:any="";
telefono_representante:any="";
genero_representante:any="";
fecha_nacimiento_representante:any="";
parentesco_respresentante:any="";
celular_representante:any="";
lugar_trabajo_representante:any="";
cedula_conyugue_representante:any="";
nombre_conyugue_representante:any="";
barrio_representante:any="";
ciudad_representante:any="";


  constructor(public navCtrl: NavController, 
    public navParams: NavParams,private p_sucursales:SucursalesProvider,
    private p_alumnos:AlumnosProvider) {

      console.log(this.navParams.get("item"));
      this.idsucursal_categorias=this.navParams.get("item");
  
  }

  ionViewDidLoad() {
    this.p_sucursales.cargar_ciudades();
  }

  bandera_me(){
    this.bandera = true;
    this.p_alumnos.busquedaReMatri(this.cedula_representante).then(()=>{
      if(this.p_alumnos.representante_datos[0]==null)
      {
       
        this.p_alumnos.validar_cedula(this.cedula_representante).then(()=>{
          if(this.p_alumnos.notificaciones=="CEDULA VALIDA")
          {
    
          }
          else
          {
            this.cedula_representante="";
          }
        })

      }
      else
      {
        let datos_repre:any;
        datos_repre=this.p_alumnos.representante_datos[0];
        this.representante_idrepresentante=datos_repre.idrepresentante;
        this.cedula_representante=datos_repre.cedula_representante;
        this.nombre_representante=datos_repre.nombre_representante;
        this.email_representante=datos_repre.email_representante;
        this.direccion_representante=datos_repre.direccion_representante;
        this.telefono_representante=datos_repre.telefono_representante;
        this.genero_representante=datos_repre.genero_representante;
        this.fecha_nacimiento_representante=datos_repre.fecha_nacimiento_representante;
        this.parentesco_respresentante=datos_repre.parentesco_respresentante;
        this.celular_representante=datos_repre.celular_representante;
        this.lugar_trabajo_representante=datos_repre.lugar_trabajo_representante;
        this.cedula_conyugue_representante=datos_repre.cedula_conyugue_representante;
        this.nombre_conyugue_representante=datos_repre.nombre_conyugue_representante;
        this.barrio_representante=datos_repre.barrio_representante;
        this.ciudad_representante=datos_repre.ciudad_representante;
        
      }
    });

  }

  insertar_datos()
  {
    if(this.representante_idrepresentante=="")
    {
      if(this.cedula_alumno=="" ||
        this.nombre_alumno=="" ||
        this.genero_alumno=="" ||
        this.tipo_sangre_alumno=="" ||
        this.fecha_nacimiento=="" ||
        this.escuela_alumno=="" ||
        this.peso_alumno=="" ||
        this.posicion_alumno=="" ||
        this.informacion_alumno=="" ||
        this.talla_alumno=="" ||
        this.idsucursal_categorias=="" ||
        this.descuento_ficha_alumno=="" ||
        this.cedula_representante=="" ||
        this.nombre_representante=="" ||
        this.email_representante=="" ||
        this.direccion_representante=="" ||
        this.genero_representante=="" ||
        this.parentesco_respresentante=="" ||
        this.celular_representante=="" ||
        this.lugar_trabajo_representante=="" ||
        this.cedula_conyugue_representante=="" ||
        this.nombre_conyugue_representante=="" ||
        this.barrio_representante=="" ||
        this.ciudad_representante==""
        )
        {
          this.p_alumnos.mostar_alerta("ERROR","COMPLETE LOS DATOS");
        }
        else
        {
          this.p_alumnos.insertar_matricua_sin_presentante(
            this.cedula_representante,
            this.nombre_representante,
            this.email_representante,
            this.direccion_representante,
            this.telefono_representante,
            this.genero_representante,
            this.fecha_nacimiento_representante,
            this.parentesco_respresentante,
            this.celular_representante,
            this.lugar_trabajo_representante,
            this.cedula_conyugue_representante,
            this.nombre_conyugue_representante,
            this.barrio_representante,
            this.ciudad_representante,
            this.cedula_alumno,
            this.nombre_alumno,
            this.genero_alumno,
            this.tipo_sangre_alumno,
            this.representante_idrepresentante,
            this.fecha_nacimiento,
            this.escuela_alumno,
            this.peso_alumno,
            this.posicion_alumno,
            this.informacion_alumno,
            this.talla_alumno,
            this.idsucursal_categorias,
            this.descuento_ficha_alumno);
         this.navCtrl.setRoot(AdminAlumnoPage);
        }


    }
    else
    {
      if(this.cedula_alumno=="" ||
        this.nombre_alumno=="" ||
        this.genero_alumno=="" ||
        this.tipo_sangre_alumno=="" ||
        this.fecha_nacimiento=="" ||
        this.escuela_alumno=="" ||
        this.peso_alumno=="" ||
        this.posicion_alumno=="" ||
        this.informacion_alumno=="" ||
        this.talla_alumno=="" ||
        this.idsucursal_categorias=="" ||
        this.descuento_ficha_alumno=="")
        {
          this.p_alumnos.mostar_alerta("ERROR","COMPLETE LOS DATOS");
        }
        else
        {
          this.p_alumnos.insertar_matricua_rpresentante(
            this.cedula_alumno,
            this.nombre_alumno,
            this.genero_alumno,
            this.tipo_sangre_alumno,
            this.representante_idrepresentante,
            this.fecha_nacimiento,
            this.escuela_alumno,
            this.peso_alumno,
            this.posicion_alumno,
            this.informacion_alumno,
            this.talla_alumno,
            this.idsucursal_categorias,
            this.descuento_ficha_alumno);
            this.navCtrl.setRoot(AdminAlumnoPage);
        }   
    }
  }

  validar_cedula1()
  {
    this.p_alumnos.validar_cedula(this.cedula_alumno).then(()=>{
      if(this.p_alumnos.notificaciones=="CEDULA VALIDA")
      {

      }
      else
      {
        this.cedula_alumno="";
      }
    })
  }

  validar_cedula2()
  {
   
  }

  validar_cedula3()
  {
    this.p_alumnos.validar_cedula(this.cedula_conyugue_representante).then(()=>{
      if(this.p_alumnos.notificaciones=="CEDULA VALIDA")
      {

      }
      else
      {
        this.cedula_conyugue_representante="";
      }
    })
  }
}
