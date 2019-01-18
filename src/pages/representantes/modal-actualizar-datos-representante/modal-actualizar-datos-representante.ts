import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SucursalesProvider } from '../../../providers/sucursales/sucursales';
import { Storage } from '@ionic/storage';
import { RepresentantestabsProvider } from '../../../providers/representantestabs/representantestabs';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  selector: 'page-modal-actualizar-datos-representante',
  templateUrl: 'modal-actualizar-datos-representante.html',
})
export class ModalActualizarDatosRepresentantePage {
  idrepresentante:any="";
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
  usuario:any="";
  clave:any="";
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private p_sucursales:SucursalesProvider,
    private storage:Storage, 
    private p_representantestab:RepresentantestabsProvider,
    private splashscreen:SplashScreen) {
  }

  ionViewDidLoad() {
    this.p_sucursales.cargar_ciudades();
    console.log('ionViewDidLoad DatosEntrenadorTabPage');
    this.storage.get('representante').then((data)=>{
      this.idrepresentante=data.idrepresentante;
      this.cedula_representante=data.cedula_representante;
      this.nombre_representante=data.nombre_representante;
      this.email_representante=data.email_representante;
      this.direccion_representante=data.direccion_representante;
      this.telefono_representante=data.telefono_representante;
      this.genero_representante=data.genero_representante;
      this.fecha_nacimiento_representante=data.fecha_nacimiento_representante;
      this.parentesco_respresentante=data.parentesco_respresentante;
      this.celular_representante=data.celular_representante;
      this.lugar_trabajo_representante=data.lugar_trabajo_representante;
      this.cedula_conyugue_representante=data.cedula_conyugue_representante;
      this.nombre_conyugue_representante=data.nombre_conyugue_representante;
      this.barrio_representante=data.barrio_representante;
      this.ciudad_representante=data.ciudad_representante;
      this.usuario=data.usuario;
      this.clave=data.clave;
     })
  }

  insertar_datos()
  {

    if(this.idrepresentante=="" ||
    this.cedula_representante=="" ||
    this.nombre_representante=="" ||
    this.email_representante=="" ||
    this.direccion_representante=="" ||
    this.telefono_representante=="" ||
    this.genero_representante=="" ||
    this.fecha_nacimiento_representante=="" ||
    this.parentesco_respresentante=="" ||
    this.celular_representante=="" ||
    this.lugar_trabajo_representante=="" ||
    this.cedula_conyugue_representante=="" ||
    this.nombre_conyugue_representante=="" ||
    this.barrio_representante=="" ||
    this.ciudad_representante=="" ||
    this.usuario=="" ||
    this.clave==""
    )
    {
      this.p_representantestab.mostar_alerta("Error","Verifique los campos vacios")
    }
    else
    {
      this.p_representantestab.actualizar_representante( 
        this.idrepresentante,
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
        this.usuario,
        this.clave)

        this.storage.remove('representante').then(()=>{
          this.splashscreen.show();
          window.location.reload();
        });

        
    }

    

  }

}
