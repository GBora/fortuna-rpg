import {Component, Input, OnInit} from '@angular/core';
import {AffinityStats} from '../interfaces/interfaces';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-affinity-block',
  templateUrl: './affinity-block.component.html',
  styleUrl: './affinity-block.component.scss'
})
export class AffinityBlockComponent {
  @Input() stats: AffinityStats;
}
