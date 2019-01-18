
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PushnotificationProvider } from './../providers/pushnotification/pushnotification';
import { HomePage } from '../pages/home/home';
import { AdminbienbenidaPage } from '../pages/admin/adminbienbenida/adminbienbenida';
import { MenuentrenadoresPage } from '../pages/entrenadores/index';
import { MenurepresentantesPage } from '../pages/representantes/menurepresentantes/menurepresentantes';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any=HomePage;

  constructor(private storage:Storage,private push:PushnotificationProvider,
    platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    private modalCTRL:ModalController) {
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

      statusBar.styleDefault();
     
    });
  }
}

