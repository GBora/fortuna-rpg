import { Component, inject, OnInit } from '@angular/core';
import { deleteSavedGame, getAllSaveGames, readGameStateByRegistry } from '../services/storage-service.service';
import { CommonModule } from '@angular/common';
import { GameState, GameStateStore } from '../data-store/dataStore';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash, faUpload } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';


@Component({
  selector: 'app-saves-menu',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './saves-menu.component.html',
  styleUrl: './saves-menu.component.scss'
})
export class SavesMenuComponent implements OnInit {
  savesList: string[] = [];
  savedShips: GameState[] = [];
  faTrash = faTrash;
  faUpload = faUpload;

  readonly store = inject(GameStateStore);

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.savesList = getAllSaveGames();
    this.savesList.forEach((registry) => {
      this.savedShips.push(readGameStateByRegistry(registry));
    })
  }

  loadSavedGame(game: GameState): void {
    this.store.updateState(game);
    this.router.navigate([this.store.currentRoute()]);
  }

  deleteSave(game: GameState): void {
    deleteSavedGame(game);
    this.savesList = getAllSaveGames();
    this.savedShips = [];
    this.savesList.forEach((registry) => {
      this.savedShips.push(readGameStateByRegistry(registry));
    })
  }
}
