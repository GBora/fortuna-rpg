import { Injectable } from '@angular/core';
import {GameState} from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  currentKey = "CURRENT"

  constructor() { }
}

const currentKey = "CURRENT"



const save = (key: string, value: object) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    console.error(e);
    alert('Can not save ' + key)
  }
}

const read = (key): object | null => {
  try {
    let raw = localStorage.getItem(key);

    if (raw && raw.length) {
      let mapped = JSON.parse(raw);
      return mapped;
    }
  } catch (e) {
    console.error(e);
    alert('Can not read key ' + key)
  }
  return null
}

export const saveGameStateCurrent = (value: GameState) => {
  save(currentKey, value);
  save(`registry_`, value);
}

export const readGameStateCurrent = (): GameState | null => {
  let rawState = read(currentKey);
  if (rawState === null) {
    return null;
  }
  return rawState as GameState;
}

export const readGameStateByRegistry = (registry: string): GameState | null => {
  let rawState = read(`${registry}`);
  if (rawState === null) {
    return null;
  }
  return rawState as GameState;
}

export const getAllSaveGames = () => {
  return Object.keys(localStorage).filter(k => k.includes('registry_'));
}

export const deleteSavedGame = (game: GameState) => {
  let keyToDelete = `registry_`;
  localStorage.removeItem(keyToDelete);
}

export const hasCurrentGame = (): boolean => {
  let raw = localStorage.getItem(currentKey);
  return raw !== null;
}

export const readLatestGame = (): GameState => {
  let rawState: object = read(currentKey);
  return rawState as GameState;
}
