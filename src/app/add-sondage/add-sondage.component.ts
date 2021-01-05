import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SondageService } from 'app/service/sondage.service';

@Component({
  selector: 'app-add-sondage',
  templateUrl: './add-sondage.component.html',
  styleUrls: ['./add-sondage.component.css']
})
export class AddSondageComponent implements OnInit {
  
  submited = true;
  sujetForm: FormGroup;
  
  constructor(private router: Router, public dialog: MatDialog ,private sondageService: SondageService) { }

  ngOnInit(): void {
    this.sujetForm = new FormGroup({
      titre : new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      
    });
  }

  submitClient() {
    this.submited = true;
    if (this.sujetForm.invalid) {
      return;
    }
 
     this.sondageService.addSondage(this.sujetForm.value);
    
  }

}
