import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonButton, IonRadioGroup, IonRadio,  IonItem, IonLabel, IonList, IonContent, IonHeader, IonTitle, IonToolbar , IonButtons, IonBackButton} from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
  standalone: true,
  imports: [IonButton, IonRadioGroup, IonRadio, IonItem, IonLabel, IonList, IonButtons, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class StatusPage implements OnInit {
  myStatus: string = '';
// Method to save the current status value into storage
  async onSave(){
    console.log(this.myStatus);
    await this.storage.create();
    await this.storage.set('status', this.myStatus);
    this.router.navigate(['/home']);
  }
  // Ionic lifecycle hook that runs every time the view is about to enter
  async ionViewWillEnter(){
    await this.storage.create();
    this.myStatus =  await this.storage.get('status');
  }
  constructor(private storage:Storage, private router:Router) { }// Constructor injecting the Ionic Storage service and Angular Router
// Angular lifecycle hook called once after component is initialized
  ngOnInit() {
  }

}
