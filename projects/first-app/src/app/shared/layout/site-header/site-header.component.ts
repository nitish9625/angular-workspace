import { Component, OnDestroy, OnInit } from '@angular/core';
import { LayoutService } from '../../../core/services/layout.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent implements OnInit, OnDestroy{
private subscriptions:Array<Subscription> = [];
public isSidebarOpen:boolean = false;
 constructor(
  private layoutService:LayoutService
 ){}

  ngOnInit(): void {
      this.subscriptions.push(
        this.layoutService.isSidebarOpen.subscribe((isSidebarOpen)=>{
          this.isSidebarOpen = isSidebarOpen;
        })
      )
  }

  ngOnDestroy(): void {
     this.subscriptions.forEach((subscription:Subscription)=>{
      subscription.unsubscribe();
     })
  }

  toggleSidebar(){
    this.layoutService.toggleSidebar(!this.isSidebarOpen);
  }
}
