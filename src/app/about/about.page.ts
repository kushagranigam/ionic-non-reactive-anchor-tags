import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit, OnDestroy {

  documentClickHandler =  (event: MouseEvent) => { console.log(event.target, 'clicked'); }
  constructor() { }

  ngOnInit() {
    // Printing clicked item.
    let listener = document.addEventListener('click', this.documentClickHandler);
  }

  ngOnDestroy() {
    // Removing click handler.
    document.removeEventListener('click', this.documentClickHandler);
  }

  wontClick() {
    console.log('Link Triggered');
  }

}

