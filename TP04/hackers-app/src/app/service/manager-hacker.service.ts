import { Injectable } from '@angular/core';
import { Hacker } from '../models/Hacker';
@Injectable({
providedIn: 'root'
})
export class ManagerHackerService {
constructor() { }
/**
* Get hackers stored locally on client side (localStorage)
* @returns list of Hackers
*/
getAllHackers(): Hacker[] {
return JSON.parse(localStorage.getItem('badguys') || '[]');
}
}