import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
private isSidebarOpenSubject = new ReplaySubject<boolean>(1);
public isSidebarOpen = this.isSidebarOpenSubject.asObservable();
  constructor() { }

  /**
   * toggle sidebar
   * @isOpen type:boolean
   */
  toggleSidebar(ioOpen:boolean){
    this.isSidebarOpenSubject.next(ioOpen);
  }
}
