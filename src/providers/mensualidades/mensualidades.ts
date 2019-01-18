import { Http, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { ToastController, AlertController, LoadingController, Platform } from 'ionic-angular';
import { URL_SERVICIOS, URL_SERVICIOSCRUD } from '../../app/config/url_servicios';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

@Injectable()
export class MensualidadesProvider {
  representantes:any[]=[];
  alumnos:any[]=[];
  factura:any[]=[];
  loadin:any;
  constructor(public http: Http,private toastCtrl: ToastController
    ,private alertCtrl:AlertController,private loadingCtrl: LoadingController,
    private iappbrowser:InAppBrowser,private document: DocumentViewer, 
    private file: File, private transfer: FileTransfer, private platform: Platform) {
  

    }

    cargar_representante(buscar:string){
      this.representantes=[];
      this.loadin=this.loadingCtrl.create({
        content: "Please wait..."
      });
      let promesa=new Promise( (resolve,reject)=>{
        this.loadin.present();
        let url=URL_SERVICIOS+"/Listar/buscarrepresentantes/"+buscar;
        this.http.get(url)
                  .map( resp => resp.json())
                  .subscribe( data=>{
                    console.log(data);
                    if(data.error)
                    {
                      this.presentToast("Error al obtener los datos");
                    }
                    else
                    {
                      this.presentToast("Datos cargados");
                      this.representantes.push(...data.representantes);
                    }
                    resolve();
                  })
      });
      this.loadin.dismiss();
      return promesa;
    }

    cargar_datosFactura(){
      this.factura=[];
      this.loadin=this.loadingCtrl.create({
        content: "Please wait..."
      });
      let promesa=new Promise( (resolve,reject)=>{
        this.loadin.present();
        let url=URL_SERVICIOS+"/Listar/datosFactura/";
        this.http.get(url)
                  .map( resp => resp.json())
                  .subscribe( data=>{
                    console.log(data);
                    if(data.error)
                    {
                      this.presentToast("Error al obtener los datos");
                    }
                    else
                    {
                      this.presentToast("Datos cargados");
                      this.factura.push(...data.factura);
                    }
                    resolve();
                  })
      });
      this.loadin.dismiss();
      return promesa;
    }


    cargar_alumnos_representante(idrepresentante:string){
      this.alumnos=[];
      this.loadin=this.loadingCtrl.create({
        content: "Please wait..."
      });
      let promesa=new Promise( (resolve,reject)=>{
        this.loadin.present();
        let url=URL_SERVICIOS+"/Listar/alumnoPorRepresentante/"+idrepresentante;
        this.http.get(url)
                  .map( resp => resp.json())
                  .subscribe( data=>{
                    console.log(data);
                    if(data.error)
                    {
                      this.presentToast("Error al obtener los datos");
                    }
                    else
                    {
                      this.presentToast("Datos cargados");
                      this.alumnos.push(...data.alumnos);
                    }
                    resolve();
                  })
      });
      this.loadin.dismiss();
      return promesa;
    }

    insertar_pago(
      representante_idrepresentante:any,
      usuario_idusuario:any,
      fecha:any,
      total:any,
      tipo_documento:any,
      serie_comprobante:any,
      num_comprobante:any,
      impuesto:any,
      ficha_alumno_idficha_alumno:any,
      numero_meses_pago:any,
      precio_pago:any,
      descuento_pago:any,
      productos_servicios_idproductos_servicios:any,
      subtotal:any
    
           )
          {
            let data= new URLSearchParams();
            data.append("representante_idrepresentante",representante_idrepresentante);
            data.append("usuario_idusuario",usuario_idusuario);
            data.append("fecha",fecha);
            data.append("total",total);
            data.append("tipo_documento",tipo_documento);
            data.append("serie_comprobante",serie_comprobante);
            data.append("num_comprobante",num_comprobante);
            data.append("impuesto",impuesto);
            data.append("ficha_alumno_idficha_alumno",ficha_alumno_idficha_alumno);
            data.append("numero_meses_pago",numero_meses_pago);
            data.append("precio_pago",precio_pago);
            data.append("descuento_pago",descuento_pago);
            data.append("productos_servicios_idproductos_servicios",productos_servicios_idproductos_servicios);
            data.append("subtotal",subtotal);
           
           // let url=URL_SERVICIOSCRUD+"pago_movil.php?op=guardaryeditar";
          
            let url=URL_SERVICIOS+"Pagos/pago";
            this.http.post(url,data).map( resp => resp.json())
            .subscribe(datos=>{
            console.log(datos.pago_idpago);
            if(datos.pago_idpago > 0)
            {
               let urlfactura="http://www.escueladel10.com/sistema/reportes/facturamovil.php?id="+datos.pago_idpago;
              // this.iappbrowser.create("http://www.escueladel10.com/sistema/reportes/facturamovil.php?id=3","_system");
              let path = null;

              if (this.platform.is('ios')) {
                path = this.file.documentsDirectory;
              } else if (this.platform.is('android')) {
                path = this.file.dataDirectory;
              }
           
              const transfer = this.transfer.create();
              transfer.download(urlfactura, path + 'myfile.pdf').then(entry => {
                let url = entry.toURL();
                this.document.viewDocument(url, 'application/pdf', {});
              });
            }

            this.mostar_alerta("Datos enviados","Estamos procesando sus datos");
            });
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
  
    mostar_alerta(titulo,mensaje)
    {
      this.alertCtrl.create({
        title:titulo ,
        subTitle:mensaje,
        buttons: ["OK"]
      }).present();
  
    }

}
