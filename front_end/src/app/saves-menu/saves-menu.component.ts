import { Component, inject, OnInit } from '@angular/core';
import { deleteSavedGame, getAllSaveGames, readGameStateByRegistry } from '../services/storage-service.service';
import { CommonModule } from '@angular/common';
import { GameStateStore } from '../data-store/dataStore';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash, faUpload } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import {GameState} from '../interfaces/interfaces';
import {getSavedGamesList, SavedGameData} from '../api-access/get-saved-games';
import {getSavedGameById} from '../api-access/get-saved-game-data';


@Component({
  selector: 'app-saves-menu',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './saves-menu.component.html',
  styleUrl: './saves-menu.component.scss'
})
export class SavesMenuComponent implements OnInit {
  savesList: SavedGameData[] = [];

  faTrash = faTrash;
  faUpload = faUpload;

  readonly store = inject(GameStateStore);

  constructor(private router: Router) {}

  async ngOnInit(): Promise<void> {
    this.savesList = await getSavedGamesList();
  }

  async loadSavedGame(game: SavedGameData): Promise<void> {
    let save: GameState = await getSavedGameById(game.worldId);
    this.store.updateState(save);
    // this.router.navigate([save.currentRoute]);
    let startRoomId = save.startRoom.ID;
    await this.router.navigate(['/game-room', startRoomId]);
  }

  deleteSave(): void {
  }
}
