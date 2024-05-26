import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, Input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgIcon
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  animations: [
    trigger('footerButtonsAnimation', [
      state('start', style({
        opacity: 0
      })),
      state('end', style({
        opacity: 1
      })),
      transition('start => end', [
        animate('1s ease-in-out')
      ]),
    ])
  ]
})
export class FooterComponent implements AfterViewInit {
  @Input({ required: true }) animState!: string;

  footerButtonsAnimationState: string = 'start';

  currentDate: Date = new Date();

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.footerButtonsAnimationState = this.animState;
    }, 500);
  }
}
