import { SelectionModel } from '@angular/cdk/collections';
import { Component, Inject, OnInit, Optional, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ipatientDetails } from 'src/app/data/model/ipatientDetails';



@Component({
  selector: 'app-modal-details',
  templateUrl: './modal-details.component.html',
  styleUrls: ['./modal-details.component.css']
})

export class ModalDetailsComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  public patients: Array<ipatientDetails> = new Array();
  public patient: ipatientDetails;

  action: string;
  local_data: any;

  // dataSource = new MatTableDataSource<ipatientDetails>(this.patients);
  // selection = new SelectionModel<ipatientDetails>(true, []);


  constructor(
    public dialogRef: MatDialogRef<ModalDetailsComponent>, 
    @Optional() @Inject(MAT_DIALOG_DATA) public data: ipatientDetails) {
      console.log(data);
      this.patient = data
      // console.log(this.dataSource.filteredData);
      this.local_data = {...data};
      this.action = this.local_data.action;
    
    }  


    doAction(){
      this.dialogRef.close({event:this.action,data:this.local_data});
    }

    closeDialog(){
      this.dialogRef.close({event: 'Cancel'});
    }



  ngOnInit() {
    this.initBaseComponent(this.paginator, this.sort);
  };

  protected initBaseComponent(paginator: MatPaginator, sort: MatSort): void 
  {
     this.paginator = paginator;
     this.sort = sort;
  }

}
