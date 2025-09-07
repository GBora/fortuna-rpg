import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { hasCurrentGame, readLatestGame, saveGameStateCurrent } from '../services/storage-service.service';
import _ from 'lodash';
import {IPlayerHero} from '../interfaces/interfaces';

export type GameState = {
  gameLost: boolean;
  currentRoute: string;
  worldId: string;
  hero: IPlayerHero | null
};

const getInitialState = (): GameState => {
  if (hasCurrentGame()) {
    return readLatestGame()
  }

  return {
    gameLost: false,
    currentRoute: "",
    worldId: "NEW",
    hero: null
  }
}

const initialState: GameState = getInitialState();

export const GameStateStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    updateState(newState: any): void {
      patchState(store, (state) => ({... state, ... newState}));
       const updatedState: GameState = {
        gameLost: store.gameLost(),
        currentRoute: store.currentRoute(),
         worldId: store.worldId(),
         hero: store.hero()
      };
      saveGameStateCurrent(updatedState);
    },
    setGameLost(lost: boolean): void {
      patchState(store, (state) => ({... state, gameLost: lost}))
    }
  }))
);
