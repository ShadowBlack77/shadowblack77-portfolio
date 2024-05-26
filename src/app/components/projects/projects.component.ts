import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, Input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NgIcon
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  animations: [
    trigger('projectTitleAnimation', [
      state('start', style({
        opacity: 0
      })),
      state('end', style({
        opacity: 1
      })),
      transition('start => end', [
        animate('1s ease-in-out')
      ]),
    ]),
    trigger('projectOneAnimation', [
      state('start', style({
        opacity: 0,
      })),
      state('end', style({
        opacity: 1,
      })),
      transition('start => end', [
        animate('1s .3s ease-in-out')
      ]),
    ]),
    trigger('projectTwoAnimation', [
      state('start', style({
        opacity: 0,        
      })),
      state('end', style({
        opacity: 1
      })),
      transition('start => end', [
        animate('1s .6s ease-in-out')
      ]),
    ]),
    trigger('projectThreeAnimation', [
      state('start', style({
        opacity: 0,
      })),
      state('end', style({
        opacity: 1
      })),
      transition('start => end', [
        animate('1s .9s ease-in-out')
      ]),
    ]),
    trigger('projectFourAnimation', [
      state('start', style({
        opacity: 0,
      })),
       state('end', style({
        opacity: 1
       })),
       transition('start => end', [
        animate('1s 1.2s ease-in-out')
       ]),
    ]),
    trigger('projectFiveAnimation', [
      state('start', style({
        opacity: 0,
      })),
       state('end', style({
        opacity: 1
       })),
       transition('start => end', [
        animate('1s 1.5s ease-in-out')
       ]),
    ]),
    trigger('projectSixAnimation', [
      state('start', style({
        opacity: 0,
      })),
       state('end', style({
        opacity: 1,
       })),
       transition('start => end', [
        animate('1s 1.8s ease-in-out')
       ]),
    ]),
  ]
})
export class ProjectsComponent implements AfterViewInit {
  @Input({ required: true }) animState!: string;

  projectsAnimationState: string = 'start';

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.projectsAnimationState = this.animState;
    }, 500);
  }
}
