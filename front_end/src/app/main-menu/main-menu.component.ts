import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { getAllSaveGames, readGameStateCurrent } from '../services/storage-service.service';
import { GameStateStore } from '../data-store/dataStore';

@Component({
  selector: 'app-main-menu',
  imports: [RouterModule],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss'
})
export class MainMenuComponent {
  readonly store = inject(GameStateStore);

  constructor(private router: Router) {}
  
  isGameRunning() {
    let game = readGameStateCurrent();
    return game !== null && game !== undefined;
  }

  doSavedGamesExist(): boolean {
    let savesList = getAllSaveGames();
    return !!savesList && !!savesList.length;
  }

  continueLatest() {
    let game = readGameStateCurrent();
    this.store.updateState(game);
    this.router.navigate([this.store.currentRoute()]);
  }
}
