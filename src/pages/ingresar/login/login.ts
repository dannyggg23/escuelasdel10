import { LoginProvider } from './../../../providers/login/login';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ModalController, ToastController } from 'ionic-angular';
import { ViewController } from '../../../../node_modules/ionic-angular/navigation/view-controller';
import { Storage } from '@ionic/storage';
import { AdminbienbenidaPage } from '../../admin/index';
import { MenuentrenadoresPage } from '../../entrenadores/menuentrenadores/menuentrenadores';
import { MenurepresentantesPage } from '../../representantes/menurepresentantes/menurepresentantes';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  usuario:string;
  pass:string;
  tipo_usuario:string;
  token:string;

  respuesta:any;

  constructor(private modalCtrl:ModalController,private storage: Storage,public navCtrl: NavController, public navParams: NavParams, private alertCtrl:AlertController,
  private viewCtrl:ViewController,private loginservice:LoginProvider,
  private toastCtrl:ToastController) {

    this.storage.get("token").then((data)=>{
      console.log(data);
      this.token=data;
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  cerrar_modal(){
    let confirm = this.alertCtrl.create({
      title: 'Desea continuar?',
      message: 'Está seguro de abandonar?',
      buttons: [
        {
          text: 'No',
          handler: () => {
           
          }
        },
        {
          text: 'Si',
          handler: () => {
            this.viewCtrl.dismiss();
          }
        }
      ]
    });
    confirm.present();
  }

  ingresar_al_sistema()
  {

    //actualizar toquen

  this.loginservice.login(this.usuario,this.pass,this.tipo_usuario)
  .subscribe( resp =>{
    let respuesta = resp.json();

    if( respuesta.error ){
      // mostramos error

      this.mostar_alerta("Error al ingresar",respuesta.mensaje);
     
    }else{
      // todo bien!

      if(this.tipo_usuario=="u")
      {
        this.storage.set('usuario',respuesta.usuario).then(()=>{
          this.loginservice.token(respuesta.usuario.idusuario,this.token,"usuario").subscribe((data)=>{
            this.navCtrl.setRoot(AdminbienbenidaPage);
            this.presentToast("Ingreso correcto");
            console.log(data);
          });
        });
        // this.navCtrl.setRoot(AdminbienbenidaPage);
        // this.presentToast("Ingreso correcto");
        // this.storage.set('usuario', respuesta.usuario);
        // this.loginservice.token(respuesta.usuario.idusuario,this.token,"usuario").subscribe((data)=>{
        //   console.log(data);
        // });
      }

      if(this.tipo_usuario=="e")
      {
        this.storage.set('entrenador', respuesta.usuario).then(()=>{
          this.loginservice.token(respuesta.usuario.identrenador,this.token,"entrenador").subscribe((data)=>{
            this.modalCtrl.create(MenuentrenadoresPage).present();
            this.presentToast("Ingreso correcto");
            console.log(data);
          });
        });
        //this.navCtrl.setRoot(MenuentrenadoresPage);
        // this.storage.set('entrenador', respuesta.usuario);
           
      }

      if(this.tipo_usuario=="r")
      {
        this.storage.set('representante', respuesta.usuario).then(()=>{
        this.loginservice.token(respuesta.usuario.idrepresentante,this.token,"representante").subscribe((data)=>{
          this.modalCtrl.create(MenurepresentantesPage).present();
          this.presentToast("Ingreso correcto");
          console.log(data);
        }); 
      });
        // this.navCtrl.setRoot(MenurepresentantesPage);
        // this.presentToast("Ingreso correcto");
        // this.storage.set('representante', respuesta.usuario);
        // this.loginservice.token(respuesta.usuario.idrepresentante,this.token,"representante").subscribe((data)=>{
        //   console.log(data);
        // });
      }
    }
      });

  }

  mostar_alerta(titulo,mensaje)
  {
    this.alertCtrl.create({
      title:titulo ,
      subTitle:mensaje,
      buttons: ["OK"]
    }).present();

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

}
