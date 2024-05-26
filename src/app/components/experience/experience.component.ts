import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
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
    ])
  ]
})
export class ExperienceComponent implements AfterViewInit {
  @Input({ required: true }) animState!: string;

  experienceAnimationState: string = 'start';

  showedIndex: number | null = null;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.experienceAnimationState = this.animState;
    }, 500);
  }

  showText(event: MouseEvent, index: number): void {
    this.showedIndex = index;
  }

  resetShowText(index: number): void {
    if (this.showedIndex === index) {
      this.showedIndex = null;
    }
  }

  isShowedText(index: number): boolean {
    return this.showedIndex === index;
  }
}
