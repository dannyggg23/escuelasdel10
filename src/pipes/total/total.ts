import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'total',
})
export class TotalPipe implements PipeTransform {
 
  transform(precio: number,descuento:number):number {
    
    let valor=(precio)-(((precio)*descuento)/100)

    return valor;
  }
}
