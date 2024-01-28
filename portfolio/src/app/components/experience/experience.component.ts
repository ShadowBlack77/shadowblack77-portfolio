import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  animations: [
    trigger('experienceAnimation', [
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
    ])
  ]
})

export class ExperienceComponent {
  @ViewChild('experienceElement') experienceElement!: ElementRef;

  experienceAnimationState = 'start';

  checkIfExperienceElementIsInViewPort() {
    const element = this.experienceElement.nativeElement;
    const rect = element.getBoundingClientRect();

    const isInViewport = 
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth);

    if (isInViewport) {
      this.experienceAnimationState = 'end';
    } else {
      // this.experienceAnimationState = 'start';
    }
  }

  @HostListener('window:scroll')
  onScroll() {    
    this.checkIfExperienceElementIsInViewPort();
  }

  @HostListener('window:load')
  onLoad() {
    this.checkIfExperienceElementIsInViewPort();
  }
}