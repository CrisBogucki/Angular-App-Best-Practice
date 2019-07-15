import {Component, ViewChild, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: 'layout.component.html',
  styleUrls: ['layout.component.scss']
})
export class LayoutComponent implements OnInit {

  @ViewChild('navBurger', {read: false, static: false}) navBurger: ElementRef;
  @ViewChild('navMenu', {read: false, static: false}) navMenu: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  toggleNavbar() {
    console.log('ok');
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }

}
