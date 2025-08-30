import {Component, Input} from '@angular/core';
import {IRaceWithStats} from '../interfaces/interfaces';
import {AffinityBlockComponent} from '../afinity-block/affinity-block.component';

@Component({
  selector: 'app-race-panel',
  imports: [
    AffinityBlockComponent
  ],
  templateUrl: './race-panel.component.html',
  styleUrl: './race-panel.component.scss'
})
export class RacePanelComponent {
  @Input() race: IRaceWithStats;
}
