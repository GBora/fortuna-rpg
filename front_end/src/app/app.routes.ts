import { Routes } from '@angular/router';
import { MainMenuComponent } from './menu/main-menu/main-menu.component';
import { SavesMenuComponent } from './menu/saves-menu/saves-menu.component';
import { NewGameComponent } from './menu/new-game-menu/new-game.component';
import {GameRoomComponent} from './game-room/game-room.component';

export const routes: Routes = [
    {
        path: 'main-menu',
        component: MainMenuComponent
    },
    {
      path: 'new-game',
      component: NewGameComponent
    },
    {
        path: 'saves',
        component: SavesMenuComponent
    },
    {
      path: 'game-room/:id',
      component: GameRoomComponent
    },
    { path: '',   redirectTo: '/main-menu', pathMatch: 'full' }
];
