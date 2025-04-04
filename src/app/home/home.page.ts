import { Component } from '@angular/core';
import {IonButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
imports: [RouterLink, IonButton, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  myStatus: string = '';// Declare a variable
  constructor(private storage:Storage) {}// Constructor that injects the Ionic Storage service
  async ionViewWillEnter(){// Lifecycle hook that runs every time the view is about to enter and become active
    await this.storage.create();// Ensure the storage is ready before using it
    // Retrieve the value associated with the key 'status' from storage
  // and assign it to the 'myStatus' variable
    this.myStatus =  await this.storage.get('status');
  }


}
