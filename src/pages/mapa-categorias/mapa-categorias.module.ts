import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapaCategoriasPage } from './mapa-categorias';

@NgModule({
  declarations: [
    MapaCategoriasPage,
  ],
  imports: [
    IonicPageModule.forChild(MapaCategoriasPage),
  ],
})
export class MapaCategoriasPageModule {}
