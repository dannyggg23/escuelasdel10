
import { OneSignal } from '@ionic-native/onesignal';
import {Platform,ToastController, AlertController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class PushnotificationProvider {

  constructor(private storage: Storage,private oneSignal: OneSignal,public platform:Platform,public toastCtrl: ToastController, private alertCtrl:AlertController) {
    console.log('Hello PushnotificationProvider Provider');
  }

  init_notification()
  {
    if (this.platform.is("cordova"))
    {
      this.oneSignal.startInit('97f28ff2-fb65-47bc-8a29-770cb14cdb9b', '663737988877');
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
          this.oneSignal.handleNotificationReceived().subscribe(() => {
            // do something when notification is received
            });
      this.oneSignal.handleNotificationOpened().subscribe(() => {
        // do something when a notification is opened
        });
      this.oneSignal.endInit();
      this.oneSignal.getIds().then((id) => {
        console.log(id);
        this.storage.set('token', id.userId);
        /*let alert = this.alertCtrl.create({
            title: 'the onesignal ids object',
            message: JSON.stringify(id),
            buttons: [{
              text: 'Ok',
              role: 'ok'
            }]
          });
          alert.present();*/
      });

    }
    else
    {
      let toast = this.toastCtrl.create({
      message: 'Onsignal no funciona en chome',
      duration: 3000
    });
    toast.present();
    }

    }

}
