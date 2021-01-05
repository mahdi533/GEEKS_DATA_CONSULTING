import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SondageService } from 'app/service/sondage.service';

@Component({
  selector: 'app-detail-sondage',
  templateUrl: './detail-sondage.component.html',
  styleUrls: ['./detail-sondage.component.css']
})
export class DetailSondageComponent implements OnInit {
  id;
  sondageForm;
  pourcentage;


   constructor(
      public dialogRef :MatDialogRef<DetailSondageComponent >
      ,private sondageService: SondageService,     
     @Inject(MAT_DIALOG_DATA)public data: any ){ };
  
   ngOnInit(): void  {
     this.sondageForm = new FormGroup({
      titre : new FormControl(),
      description: new FormControl(),
      choix : new FormControl(),
      nombreDeVote: new FormControl(),
     });
     this.sondageService.getSondagebyid(this.data.id).subscribe((response:any) => {
       this.sondageForm.patchValue(response.sondage);   
     const nbr=parseInt(response.sondage.nombreDeVote)
       this.sondageService.getAllVote().subscribe((response:any) => {
        this.pourcentage=(nbr*response.sondage)/100;  
   });
            
    });
  
   }
   close(): void {
     this.dialogRef.close();
   }   
 }