import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(public snackBar: MatSnackBar) {
  }

  public addMessage(message: string): void {
    const config = new MatSnackBarConfig();
    config.duration = 4000;

    this.snackBar.open(message, null, config);
  }
}
