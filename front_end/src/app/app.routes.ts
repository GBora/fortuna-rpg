import { Routes } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { SavesMenuComponent } from './saves-menu/saves-menu.component';
import { NewGameComponent } from './new-game/new-game.component';

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
    { path: '',   redirectTo: '/main-menu', pathMatch: 'full' }
];
