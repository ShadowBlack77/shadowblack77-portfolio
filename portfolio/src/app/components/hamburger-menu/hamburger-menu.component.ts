import { Component, ElementRef, ViewChild, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrl: './hamburger-menu.component.scss',
  animations: [
    trigger('hamburgerMenuTextAnimation', [
      state('start', style({
        opacity: 0
      })),
      state('end', style({
        opacity: 1
      })),
      transition('start => end', [
        animate('1s ease-in-out')
      ]),
      transition('end => start', [
        animate('1s ease-in-out')
      ])
    ]),
    trigger('hamburgerMenuAnimation', [
      state('start', style({
        width: '0px',
        left: '-1px'
      })),
      state('end', style({
        width: '260px',
        left: 0
      })),
      transition('start => end', [
        animate('1s ease-in-out')
      ]),
      transition('end => start' , [
        animate('1s ease-in-out')
      ])
    ]),
  ]
})
export class HamburgerMenuComponent {
  @ViewChild('hamburgerMenu') hamburgerMenu!: ElementRef;
  @Input('currentSection') currentSection: string = '';
  @Input('isMenuOpened') isMenuOpened: boolean = false;
  @Input('textInMenu') textInMenu: boolean = false;

}