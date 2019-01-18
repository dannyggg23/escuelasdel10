import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { URL_IMG_ENTRENADOR } from '../../../app/config/url_servicios';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeTransitionOptions, NativePageTransitions } from '@ionic-native/native-page-transitions';
import { ModalActualizarDatosEntrenadorPage } from '../modal-actualizar-datos-entrenador/modal-actualizar-datos-entrenador';

@Component({
  selector: 'page-datos-entrenador-tab',
  templateUrl: 'datos-entrenador-tab.html',
})
export class DatosEntrenadorTabPage {

nombre_entrenador:string="";
cedula_entrenador:string="";
email_entrenador:string="";
token:string="";
titulo_entrenador:any="" 
genero_entrenador  :any="" 
direccion_entrenador :any=""              
celular_entrenador:any=""
telefono_entrenador:any=""
descripcion:any=""
identrenador:any=""
imagenUsuario:any=URL_IMG_ENTRENADOR;

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:Storage,
    private alertCtrl:AlertController,private splashscreen:SplashScreen,
    private nativePageTransitions:NativePageTransitions) {
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
      this.token=data.token;
      this.direccion_entrenador=data.direccion_entrenador;
      this.celular_entrenador=data.celular_entrenador;
      this.telefono_entrenador=data.telefono_entrenador;
      this.descripcion=data.descripcion;
      this.imagenUsuario=this.imagenUsuario+data.imagen_entrenador;
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
            this.storage.remove('entrenador').then(()=>{
             // this.splashscreen.show();
              window.location.reload();
            });
          }
        }
      ]
    });
    alert.present();
  }

  actualizar(){
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 600
     };
    this.nativePageTransitions.fade(options);
    this.navCtrl.push(ModalActualizarDatosEntrenadorPage);
  }
  }


