import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddModalComponent } from '../add-modal/add-modal.component';

@Component({
  selector: 'app-car-index',
  templateUrl: './car-index.component.html',
  styleUrls: ['./car-index.component.css']
})
export class CarIndexComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }


  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    this.dialog.open(AddModalComponent, dialogConfig);
}

}
