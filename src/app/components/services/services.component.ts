import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, Input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    NgIcon
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
  animations: [
    trigger('blockOne', [
      state('start', style({
        opacity: 0,
      })),
      state('end', style({
        opacity: 1,
      })),
      transition('start => end', [
        animate('1s ease-in-out')
      ]),
    ]),
    trigger('blockTwo', [
      state('start', style({
        opacity: 0
      })),
      state('end', style({
        opacity: 1
      })),
      transition('start => end', [
        animate('1s .5s ease-in-out')
      ]),
    ]),
    trigger('blockThree', [
      state('start', style({
        opacity: 0
      })),
      state('end', style({
        opacity: 1
      })),
      transition('start => end', [
        animate('1s 1s ease-in-out')
      ]),
    ])
  ]
})
export class ServicesComponent implements AfterViewInit {
  @Input({ required: true }) animState!: string;

  serviceAnimationState = 'start';

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.serviceAnimationState = this.animState;
    }, 500);
  }
}
