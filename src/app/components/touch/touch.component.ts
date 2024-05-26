import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, Input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-touch',
  standalone: true,
  imports: [
    NgIcon
  ],
  templateUrl: './touch.component.html',
  styleUrl: './touch.component.scss',
  animations: [
    trigger('touchButtonAnimation', [
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
export class TouchComponent implements AfterViewInit {
  @Input({ required: true }) animState!: string;

  buttonAnimationState: string = 'start';

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.buttonAnimationState = this.animState;
    }, 500);
  }
}
