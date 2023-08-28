import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LayoutService } from '../../../core/services/layout.service';

@Component({
  selector: 'site-sidebar',
  templateUrl: './site-sidebar.component.html',
  styleUrls: ['./site-sidebar.component.scss']
})
export class SiteSidebarComponent implements OnInit, OnDestroy {
  isClosed:any = {sampleTypes:true};
  isSidebarOpen:boolean = false;
  private subscriptions:Array<Subscription> = [];

  constructor(
    private layoutService:LayoutService
  )
  {

  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.layoutService.isSidebarOpen.subscribe((value)=>{
        this.isSidebarOpen =value;
      })
    )
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription:Subscription)=>{
      subscription.unsubscribe();
    });
  }

  toggleSidebar(){
    this.layoutService.toggleSidebar(!this.isSidebarOpen);
  }
}
