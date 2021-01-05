import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AddSondageComponent } from 'app/add-sondage/add-sondage.component';
import { DetailSondageComponent } from 'app/detail-sondage/detail-sondage.component';
import { SondageService } from 'app/service/sondage.service';



export interface sujet{
  titre : String,
  description  : String,
}
@Component({
  selector: 'app-my-sondage',
  templateUrl: './my-sondage.component.html',
  styleUrls: ['./my-sondage.component.css']
})
export class MySondageComponent implements OnInit {


  public displayedColumns = ['titre', 'description', 'details', 'vote'];
  public dataSource = new MatTableDataSource<sujet>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private router: Router, public dialog: MatDialog ,private sondageService: SondageService) { }
  
  ngOnInit(): void {
    this.getAllOwners();
  
  }

   getAllOwners () {
    this.sondageService.getMySondage().subscribe((response:any) => {
      console.log(response);
      
       this.dataSource.data = response.sondage as sujet[];
    })
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddSondageComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
 
  }

  openModal(id): void {
    const dialogRef = this.dialog.open(DetailSondageComponent, {
      data :{'id':id}
 });
}
  voters(id){

    this.sondageService.voter(id);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}
