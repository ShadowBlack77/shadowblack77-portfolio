import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, Input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-baner',
  standalone: true,
  imports: [
    NgIcon
  ],
  templateUrl: './baner.component.html',
  styleUrl: './baner.component.scss',
  animations: [
    trigger('h2Animation', [
      state('start', style({
        opacity: 0,
        transform: 'translateY(-100px)'
      })),
      state('end', style({
        opacity: 1,
        transform: 'translateY(0px)'
      })),
      transition('start => end', [
        animate('1s ease-in-out')
      ]),
    ]),
    trigger('pAnimation', [
      state('start', style({
        opacity: 0,
        transform: 'translateY(100px)'
      })),
      state('end', style({
        opacity: 1,
        transform: 'translateY(0px)'
      })),
      transition('start => end', [
        animate('1s ease-in-out')
      ])
    ])
  ]
})
export class BanerComponent implements AfterViewInit {
  animationBanerState: string = 'start';

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.animationBanerState = 'end';
    }, 200);
  }
}
