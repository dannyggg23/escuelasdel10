import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { ModalActualizarDatosRepresentantePage, ActualizarDatosAlumnoPage } from '..';
import { AlumnosRepresentantetabPage } from '../alumnos-representantetab/alumnos-representantetab';
import { SucursalesProvider } from '../../../providers/sucursales/sucursales';
import { RepresentantestabsProvider } from '../../../providers/representantestabs/representantestabs';
import { URL_IMG_ALUMNOS } from '../../../app/config/url_servicios';


@Component({
  selector: 'page-datos-alumnos-representantetab',
  templateUrl: 'datos-alumnos-representantetab.html',
})
export class DatosAlumnosRepresentantetabPage {
  
  pushpage:any=ActualizarDatosAlumnoPage;
  urlimagen=URL_IMG_ALUMNOS;

  mymodel="segment2";

  pushPage:any=AlumnosRepresentantetabPage;

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
  token:any=""
  ciudad_representante:any="";
  usuario:any="";
  clave:any="";

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,private storage:Storage,
    private alertCtrl:AlertController,private splashscreen:SplashScreen,
    private nativePageTransitions:NativePageTransitions,private p_sucursales:SucursalesProvider,
    private p_representantestab:RepresentantestabsProvider,) {
  }

  ionViewDidLoad() {
    this.p_sucursales.cargar_ciudades();
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
      this.p_representantestab.cargar_alumnosRepresentante(data.idrepresentante);
     })
  }

  cerra_sesion(){
    let alert = this.alertCtrl.create({
      title: 'Cerrar sesión',
      message: 'Está seguro de cerrar la sesión?',
      buttons: [
        {
          text: 'CANCELAR',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'ACEPTAR',
          handler: () => {
            this.storage.remove('representante').then(()=>{
            //  this.splashscreen.show();
              window.location.reload();
            });
          }
        }
      ]
    });
    alert.present();
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

  // actualizar(){
  //   let options: NativeTransitionOptions = {
  //     direction: 'up',
  //     duration: 600
  //    };
  //   this.nativePageTransitions.fade(options);
  //   this.navCtrl.push(ModalActualizarDatosRepresentantePage);
  // }
}
