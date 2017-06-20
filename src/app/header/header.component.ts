import { AuthService } from './../auth/auth.service';
import { DataStorageService } from './../shared/data-storage.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  dataStorageServiceSubscription:Subscription;

  constructor(private dataStorageService:DataStorageService, private authService:AuthService) { }

  ngOnInit() {
  }

  onSaveData(){
    this.dataStorageServiceSubscription = this.dataStorageService.storeRecipes().subscribe(
      (response:Response)=>{
        console.log(response);
      });
  }

  onFetchData(){
    this.dataStorageService.getRecipes();
  }

  ngOnDestroy(){
    this.dataStorageServiceSubscription.unsubscribe();
  }

  onLogout(){
    this.authService.logout();
  }
}
