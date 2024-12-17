import { Component } from '@angular/core';
import { Hacker } from '../../models/Hacker';
import { ManagerHackerService } from '../../service/manager-hacker.service';
@Component({
  selector: 'app-hacker-list',
  templateUrl: './hacker-list.component.html',
  styleUrl: './hacker-list.component.css'
})
export class HackerListComponent {
  hackers: Hacker[]
  constructor(private managerHackerService: ManagerHackerService) {
    this.hackers = managerHackerService.getAllHackers()
}
}
