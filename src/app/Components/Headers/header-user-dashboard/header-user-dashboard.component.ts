import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-user-dashboard',
  templateUrl: './header-user-dashboard.component.html',
  styleUrls: ['./header-user-dashboard.component.css']
})
export class HeaderUserDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logout() {
    window.location.reload();
  }
}
