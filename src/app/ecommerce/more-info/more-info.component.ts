import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ForSale } from 'src/app/models/forsale.model';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})
export class MoreInfoComponent {

  dialogItem: ForSale

  constructor(
    public dialogRef: MatDialogRef<MoreInfoComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any) { 
      this.dialogItem = data.forSale;
      console.log(data);
    }

  closeDialog(): void {
    this.dialogRef.close();
  }

  getImgSrc(): String {
    if (this.dialogItem.imageRef) {
      if (this.dialogItem.imageRef.startsWith('http')) {
        return this.dialogItem.imageRef;
      } else {
        return '../../../assets/e-com/' + this.dialogItem.imageRef + '.jpg';
      }
    }
    return null;
  }

}
