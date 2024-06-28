import { Injectable } from '@angular/core';
import Huile from '../model/huile';

@Injectable({
  providedIn: 'root'
})
export class HuilesServicesService {
  /**
   * l'attribut huiles de ce service contient tout les corps gras qui viendrait de notre api / base de données
   */
  huiles:Array<Huile>= [{id: 1, nom: "huile Coco",iode: 9,ins: 248,douceur: 7.746,
                        lavant: 14.462,durete: 9.390,solubilite: 11.204,sechage: 11.880},
                        {id: 2,nom: "huile d'olives",iode: 78,ins: 111,douceur: 9.260,
                        lavant: 10.192,durete: 10.144,solubilite: 9.298,sechage: 10.194}]
  constructor() { }
}
