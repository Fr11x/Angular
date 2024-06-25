import { Injectable } from '@angular/core';
import Huile from '../model/huile';

@Injectable({
  providedIn: 'root'
})
export class HuilesServicesService {
  /**
   * l'attribut huiles de ce service contient tout les corps gras qui viendrait de notre api / base de données
   */
  huiles:Array<Huile>= [{id: 1, nom: "huile Coco"},{id: 2,nom: "huile d'olives"}]
  constructor() { }
}
