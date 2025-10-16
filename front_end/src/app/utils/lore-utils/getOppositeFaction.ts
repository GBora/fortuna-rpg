import * as factions from  "../../../../../data/player_factions.json";
import Chance from 'chance';

const chance = new Chance();

export const getOppositeFactions = (id: string): string[] => {
  let faction = factions.find(f => f.ID === id);
  return faction.ENEMIES;
}

export const getRandomOppositeFaction = (id:string): any => {
  let opposites = getOppositeFactions(id);
  let opposite = chance.pickone(opposites);
  return opposite;
}
