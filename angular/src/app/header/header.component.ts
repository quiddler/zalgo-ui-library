import { Component, OnInit, Input, OnDestroy, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private overlayIsShowing: boolean = false;
  private div: HTMLElement;
  
  @HostListener('window:resize') onResize () {
      if (window.innerWidth > 1024 || document.body.clientWidth > 1024) {
          this.destroyOverlay();
      }
  }

  constructor() { }

  @Input() user: string;

  ngOnInit() {

  }

  showResponsiveMenu() {
      if (!this.overlayIsShowing) {
          this.createOverlay();
          this.overlayIsShowing = true;
      } else {
          this.destroyOverlay();
          this.overlayIsShowing = false;
      }
  }

  private createOverlay() {
      this.div = document.createElement('div');
      this.div.className = 'overlay';
      this.div.onclick = () => {
          this.div.className = "back-out";
          setTimeout( () => { 
              document.body.removeChild(this.div);
              this.overlayIsShowing = false;
          }, 350);
      };
      document.body.appendChild(this.div);
  }

  private destroyOverlay() {
      this.div.click();
  }

  ngOnDestroy() {
      this.destroyOverlay();
  }

  search(form: NgForm) {
      console.log(form.value.searchName);
  }

}
