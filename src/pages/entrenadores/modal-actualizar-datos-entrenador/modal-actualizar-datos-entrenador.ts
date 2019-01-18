import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { EntrenadorestabProvider } from '../../../providers/entrenadorestab/entrenadorestab';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  selector: 'page-modal-actualizar-datos-entrenador',
  templateUrl: 'modal-actualizar-datos-entrenador.html',
})
export class ModalActualizarDatosEntrenadorPage {
  
  identrenador:any="";
  cedula_entrenador:any="";
  nombre_entrenador:any="";
  direccion_entrenador:any="";
  email_entrenador:any="";
  telefono_entrenador:any="";
  celular_entrenador:any="";
  descripcion:any="";
  genero_entrenador:any="";
  titulo_entrenador:any="";
  fechanacimiento_entrenador:any="";
  usuario:any="";
  clave:any="";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private storage:Storage,private p_entrenadorestab:EntrenadorestabProvider,
    private splashscreen:SplashScreen) {
  //console.log(this.navParams.get('item'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatosEntrenadorTabPage');
    this.storage.get('entrenador').then((data)=>{
      this.identrenador=data.identrenador;
      this.nombre_entrenador=data.nombre_entrenador;
      this.cedula_entrenador=data.cedula_entrenador;
      this.titulo_entrenador=data.titulo_entrenador;
      this.genero_entrenador=data.genero_entrenador;
      this.email_entrenador=data.email_entrenador;
      this.direccion_entrenador=data.direccion_entrenador;
      this.celular_entrenador=data.celular_entrenador;
      this.telefono_entrenador=data.telefono_entrenador;
      this.descripcion=data.descripcion;
      this.fechanacimiento_entrenador=data.fechanacimiento_entrenador;
      this.usuario=data.usuario;
      this.clave=data.clave;

     })
  }

  insertar_datos()
  {

    if(this.identrenador=="" ||
    this.cedula_entrenador=="" ||
    this.nombre_entrenador=="" ||
    this.direccion_entrenador=="" ||
    this.email_entrenador=="" ||
    this.telefono_entrenador=="" ||
    this.celular_entrenador=="" ||
    this.descripcion=="" ||
    this.genero_entrenador=="" ||
    this.titulo_entrenador=="" ||
    this.fechanacimiento_entrenador=="" ||
    this.usuario=="" ||
    this.clave==""
    )
    {
      this.p_entrenadorestab.mostar_alerta("Error","Verifique los campos vacios")
    }
    else
    {
      this.p_entrenadorestab.actualizar_entrenador( 
        this.identrenador,
        this.cedula_entrenador,
        this.nombre_entrenador,
        this.direccion_entrenador,
        this.email_entrenador,
        this.telefono_entrenador,
        this.celular_entrenador,
        this.descripcion,
        this.genero_entrenador,
        this.titulo_entrenador,
        this.fechanacimiento_entrenador,
        this.usuario,
        this.clave)

        this.storage.remove('entrenador').then(()=>{
          this.splashscreen.show();
          window.location.reload();
        });

        
    }

    

  }

}
