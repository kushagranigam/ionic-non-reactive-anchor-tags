import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit, OnDestroy {

  documentClickHandler =  (event: MouseEvent) => { 
    let targetElement = event.target as HTMLElement;
    console.log(targetElement, 'clicked');
    this.clickItems.push('\'' + targetElement.tagName + '\' element clicked.');
  };
  clickItems: Array<string> = [];

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

