import { Component } from '@angular/core';
import { HuilesServicesService } from '../services/huiles-services.service';
import Huile from '../model/huile';

@Component({
  selector: 'app-page-calcul',
  templateUrl: './page-calcul.component.html',
  styleUrl: './page-calcul.component.css'
})
export class PageCalculComponent {
huiles = new  Array<Huile>
huilesData = this.huileService.huiles
huileSelectionne: Huile|null = null
constructor(private huileService: HuilesServicesService){
}

selectionHuile(event:Event|null){
  let target : HTMLInputElement = event!.currentTarget as HTMLInputElement
  let id:Number = Number(target.value)
  for (const uneHuile of this.huilesData) {
    if (uneHuile.id == id){
      this.huileSelectionne = uneHuile
    }
  }
}

ajouterHuile(){
  this.huiles.push(this.huileSelectionne!)
}
}
