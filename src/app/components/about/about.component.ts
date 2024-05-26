import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  animations: [
    trigger('aboutAnimation', [
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
export class AboutComponent implements AfterViewInit {
  @Input({ required: true }) animState!: string;

  currentYear: Date = new Date();
  currentYearsOld = this.currentYear.getFullYear() - 2004;

  aboutAnimState: string = 'start';

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.aboutAnimState = this.animState;
    }, 500);
  }
}
