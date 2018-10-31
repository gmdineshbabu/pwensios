import { Component } from '@angular/core';
import { DatabaseService } from './database/database.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
constructor(
  private dbService: DatabaseService
) {
  this.dbService.createDB();
}
}
