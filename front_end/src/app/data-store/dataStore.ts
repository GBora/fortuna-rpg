import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { hasCurrentGame, readLatestGame, saveGameStateCurrent } from '../services/storage-service.service';
import {GameState, PlayerHero} from '../interfaces/interfaces';

const getInitialState = (): GameState => {
  if (hasCurrentGame()) {
    return readLatestGame()
  }

  return {
    gameLost: false,
    currentRoute: "",
    worldId: "NEW",
    hero: null,
    startRoom: null,
    dungeonRooms: []
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
         hero: store.hero(),
         startRoom: store.startRoom(),
         dungeonRooms: store.dungeonRooms()
      };
      saveGameStateCurrent(updatedState);
    },
    setGameLost(lost: boolean): void {
      patchState(store, (state) => ({... state, gameLost: lost}))
    }
  }))
);
