
import { Storage } from '@ionic/storage';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController,ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PushnotificationProvider } from './../providers/pushnotification/pushnotification';
import { HomePage } from '../pages/home/home';
import { AdminbienbenidaPage } from '../pages/admin/adminbienbenida/adminbienbenida';
import { MenuentrenadoresPage } from '../pages/entrenadores/index';
import { MenurepresentantesPage } from '../pages/representantes/menurepresentantes/menurepresentantes';
import { App } from 'ionic-angular';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {

@ViewChild(Nav) nav: Nav;

  rootPage:any=HomePage;

  constructor(public  app: App,private storage:Storage,private push:PushnotificationProvider,
    private platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    private modalCTRL:ModalController,public alertCtrl: AlertController) {
    platform.ready().then(() => {
      splashScreen.hide();
      this.push.init_notification();
      this.storage.get("usuario").then((data)=>{   
        
        if(data!=null)
        {
          this.rootPage=AdminbienbenidaPage;
        }
      });

      this.storage.get("entrenador").then((data)=>{   
        if(data!=null)
        {
         // this.rootPage=MenuentrenadoresPage;
         this.modalCTRL.create(MenuentrenadoresPage).present();
        }
      });

      this.storage.get("representante").then((data)=>{   
        if(data!=null)
        {
         // this.rootPage=MenurepresentantesPage;
         this.modalCTRL.create(MenurepresentantesPage).present();
        }
      });

      this.platform.pause.subscribe(()=>{

      })

      this.platform.resume.subscribe(()=>{

      })


      statusBar.styleDefault();
     
    });

    this.platform.registerBackButtonAction(() => {
      // Catches the active view
      let nav = this.app.getActiveNavs()[0];
      let activeView = nav.getActive();                
      // Checks if can go back before show up the alert
      if(activeView.name === 'HomePage') {
          if (nav.canGoBack()){
              nav.pop();
          } else {
              const alert = this.alertCtrl.create({
                  title: 'Alerta',
                  message: 'Decea salir de la aplicación?',
                  buttons: [{
                      text: 'Cancelar',
                      role: 'cancel',
                      handler: () => {
                        this.nav.setRoot('HomePage');
                        console.log('** Saída do App Cancelada! **');
                      }
                  },{
                      text: 'Salir',
                      handler: () => {
                        this.logout();
                        this.platform.exitApp();
                      }
                  }]
              });
              alert.present();
          }
      }
  });
  }

  openPage(page) {
      // Reset the content nav to have just this page
      // we wouldn't want the back button to show in this scenario
      this.nav.setRoot(page.component);
  }   

  logout() {
      this.nav.setRoot('LoginPage');
  }
}