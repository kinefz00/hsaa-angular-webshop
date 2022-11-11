import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'lib-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserDialogComponent implements OnInit {


    @Input() title?: string;
    @Input() share?: boolean;
    @Input() registerForm?: boolean;

    constructor(private dialogRef: MatDialogRef<AddUserDialogComponent>) {}

    ngOnInit(): void {
      this.registerForm = false;
      this.share = false;
    }

    public close() {
      this.dialogRef.close();
    }
}
