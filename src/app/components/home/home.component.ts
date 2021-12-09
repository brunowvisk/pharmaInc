import {AfterViewInit, Component, OnChanges, OnInit, ViewChild} from '@angular/core';
import { MatTable, MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ApiServiceService } from 'src/app/data/services/api-service.service';
import { iresultsModel } from 'src/app/data/model/iresultsModel';
import { SelectionModel } from '@angular/cdk/collections';
import { igeneralModel } from 'src/app/data/model/igeneralModel';
import { ModalDetailsComponent } from '../modal-details/modal-details.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableFilter } from 'mat-table-filter';
import { ipatientDetails } from 'src/app/data/model/ipatientDetails';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnChanges, AfterViewInit{

  public patients: Array<iresultsModel> = new Array();
  filterEntity: ipatientDetails;
  filterType: MatTableFilter;

  displayedColumns: string[] = ['picture','name', 'gender', 'birth', 'nat', 'actions'];
  dataSource = new MatTableDataSource<iresultsModel>(this.patients);
  selection = new SelectionModel<iresultsModel>(true, []);
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  constructor(public dialog: MatDialog, 
              private apiService: ApiServiceService){ }

  ngAfterViewInit(): void {
    this.dataSource = new MatTableDataSource<iresultsModel>(this.patients);
    this.dataSource.paginator = this.paginator;
  
  }

  ngOnChanges(){
    this.dataSource = new MatTableDataSource<iresultsModel>(this.patients);
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getPatients();
  
}


  getPatients() {
        
    this.apiService.getAllPatients().subscribe((dados: igeneralModel) => {
      this.patients = dados.results;
      console.log(dados.results);
      console.log(this.patients);
      this.dataSource = new MatTableDataSource<iresultsModel>(this.patients);
      console.log(this.dataSource);
      setTimeout(()=>{
        this.dataSource.paginator = this.paginator;
       })

      })
    

  }

  redirectToDetails(action: any, obj: { action: any; }) {
    obj.action = action;

    const dialogRef = this.dialog.open(ModalDetailsComponent, {
      width: '500px',
      data: obj,
    });

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
    });

  }

  
}







