import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Input() user: string;

  ngOnInit() {
  }

  showResponsiveMenu() {
      alert("menu is in the making...")
  }

}
