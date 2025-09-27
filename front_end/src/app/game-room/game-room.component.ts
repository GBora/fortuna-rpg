import {Component, inject, OnInit} from '@angular/core';
import {GameState, Room} from '../interfaces/interfaces';
import {ActivatedRoute} from '@angular/router';
import {GameStateStore} from '../data-store/dataStore';

@Component({
  selector: 'app-game-room',
  imports: [],
  templateUrl: './game-room.component.html',
  styleUrl: './game-room.component.scss'
})
export class GameRoomComponent implements OnInit {
  room: Room | null = null;

  constructor(private route: ActivatedRoute) {}

  private gameStore = inject(GameStateStore);

  // Expose the state signals for the template
  gameLost = this.gameStore.gameLost;
  currentRoute = this.gameStore.currentRoute;
  worldId = this.gameStore.worldId;
  hero = this.gameStore.hero;
  startRoom = this.gameStore.startRoom;
  dungeonRooms = this.gameStore.dungeonRooms;

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.findRoom(id);
    });
  }

  private findRoom(id: string): void {
    this.room = this.dungeonRooms().find(room => room.ID === id) || null;
  }
}
