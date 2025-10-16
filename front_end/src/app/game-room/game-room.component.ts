import {Component, inject, OnInit} from '@angular/core';
import {GameState, Room} from '../interfaces/interfaces';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {GameStateStore} from '../data-store/dataStore';
import {updatedSavedGame} from '../api-access/update_saved_game';

@Component({
  selector: 'app-game-room',
  imports: [
    RouterLink
  ],
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
      this.updateState()
    });
  }

  private findRoom(id: string): void {
    this.room = this.dungeonRooms().find(room => room.ID === id) || null;
  }

  private async updateState(): Promise<void> {
    let state: GameState = {
      worldId: this.worldId(),
      currentRoute: window.location.href,
      startRoom: this.startRoom(),
      hero: this.hero(),
      dungeonRooms: this.dungeonRooms(),
      gameLost: this.gameLost()
    }
    await updatedSavedGame(state);
  }
}
