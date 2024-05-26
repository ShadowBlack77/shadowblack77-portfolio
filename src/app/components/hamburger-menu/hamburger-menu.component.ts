import { animate, state, style, transition, trigger } from '@angular/animations';
import { NgClass } from '@angular/common';
import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-hamburger-menu',
  standalone: true,
  imports: [
    NgClass
  ],
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
        animate('.5s ease-in-out')
      ]),
      transition('end => start', [
        animate('.5s ease-in-out')
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
        animate('.5s ease-in-out')
      ]),
      transition('end => start' , [
        animate('.5s ease-in-out')
      ])
    ]),
  ]
})
export class HamburgerMenuComponent {
  @ViewChild('hamburgerMenu') hamburgerMenu!: ElementRef;
  @Input('currentSection') currentSection: string = '';
  @Input('isMenuOpened') isMenuOpened: boolean = false;
  @Input('textInMenu') textInMenu: boolean = false;

  @HostListener('window: scroll')
  onScroll(): void {
    if (scrollY === 0) {
      this.currentSection = 'explore';
    }
  }
}
