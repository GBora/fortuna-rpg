import {Component, Input} from '@angular/core';
import {PlayerClassWithStats} from '../interfaces/interfaces';
import {AffinityBlockComponent} from '../afinity-block/affinity-block.component';

@Component({
  selector: 'app-class-panel',
  imports: [
    AffinityBlockComponent
  ],
  templateUrl: './class-panel.component.html',
  styleUrl: './class-panel.component.scss'
})
export class ClassPanelComponent {
  @Input() playerClass: PlayerClassWithStats
}
