import { Component, EventEmitter, HostListener, Output, Input } from "@angular/core";
import { trigger, state, style, animate, transition, animation } from "@angular/animations";
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('scrollAnimation', [
      state('start', style({
        backgroundColor: 'transparent',
        padding: '24px 0'
      })),
      state('end', style({
        backgroundColor: 'black',
        padding: '8px 0'
      })),
      transition('start => end', [
        animate('.5s ease-in-out')
      ]),
      transition('end => start', [
        animate('.5s ease-in-out')
      ])
    ])
  ]
})
export class HeaderComponent {
  animationState = 'start';

  @Output() animationStateChanged = new EventEmitter<string>();

  @Input() currentSection: string = '';
  
  @HostListener('window:scroll')
  onScroll() {
    if (window.scrollY > 1) {
      this.setAnimationState('end');
    } else {
      this.setAnimationState('start');
    }
  }

  private setAnimationState(state: string) {
    if (this.animationState !== state) {
      this.animationState = state;
      this.animationStateChanged.emit(state);
    }
  }
}