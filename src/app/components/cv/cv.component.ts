import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss',
  animations: [
    trigger('cvAnimation', [
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
export class CvComponent implements AfterViewInit {
  @Input({ required: true }) animState!: string;

  cvAnimateState: string = 'start';

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.cvAnimateState = this.animState;
    }, 500);
  }
}
