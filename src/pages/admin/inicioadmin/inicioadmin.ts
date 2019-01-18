import { Component } from '@angular/core';
import { NavController, NavParams, MenuController, Platform, ModalController } from 'ionic-angular';
import { NotificacionesAdminPage } from '../notificaciones-admin/notificaciones-admin';
import { AdminAlumnoPage } from '../admin-alumno/admin-alumno';
import { AdminMensualidadesPage } from '../admin-mensualidades/admin-mensualidades';
import { AdminbienbenidaPage } from '../adminbienbenida/adminbienbenida';
import { AppAvailability } from '@ionic-native/app-availability';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Device } from '@ionic-native/device';
import { InformacionAcademiaProvider } from '../../../providers/informacion-academia/informacion-academia';
import { URL_IMG_SLIDER } from '../../../app/config/url_servicios';


@Component({
  selector: 'page-inicioadmin',
  templateUrl: 'inicioadmin.html',
})
export class InicioadminPage {

  URL_IMG_SLIDER:string=URL_IMG_SLIDER;



  constructor(private menuCtrl:MenuController,public navCtrl: NavController,private modalCtrl:ModalController,
    private AppAvailability:AppAvailability,
    private InAppBrowser:InAppBrowser,
    private Device:Device,private platfor:Platform,
    private p_informacion:InformacionAcademiaProvider) {
  
 //this.menuCtrl.toggle();

  
  }

  ionViewDidLoad() {
    this.p_informacion.cargar_imagenes().then(()=>{
      console.log(this.p_informacion.imagenes_app);
    });
  }

  open_menu(){
    this.menuCtrl.open();
   
  }

  

  launchExternalApp(iosSchemaName: string, androidPackageName: string, appUrl: string, httpUrl: string, username: string) {
    let app: string;
    if (this.platfor.is('ios')) {
    console.log("plataforma ios");

      app = iosSchemaName;
    } else if (this.platfor.is('android')) {
      app = androidPackageName;
    console.log("plataforma android");

    } else {
    this.InAppBrowser.create(httpUrl + username, '_system');
    console.log("no es plataforma");
      return;
    }
  
    this.AppAvailability.check(app).then(
      () => { // success callback
  
       this.InAppBrowser.create(appUrl + username, '_system');
    
       console.log("abrir app");

        
      },
      (data) => { // error callback

      this.InAppBrowser.create(httpUrl + username, '_system');
       console.log("ERROR");
       console.log(data);


      }
    );
  }
  
  openInstagram(username: string) {
    this.launchExternalApp('instagram://', 'com.instagram.android', 'instagram://user?username=', 'https://www.instagram.com/', username);
  }
  
  openTwitter(username: string) {
    this.launchExternalApp('twitter://', 'com.twitter.android', 'twitter://user?screen_name=', 'https://twitter.com/', username);
  }
  
  openFacebook(username: string) {
    this.launchExternalApp('fb://', 'com.facebook.orca', 'fb://page/', 'https://www.facebook.com/', username);
  }

  openwhatsapp(number: string) {

    this.launchExternalApp('whatsapp://', 'com.whatsapp', 'whatsapp://send?phone=', 'https://wa.me/', number);

  }

  


}
