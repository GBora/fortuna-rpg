export interface IFaction {
  LABEL: string;
  ID: string;
  ALIES: string[];
  ENEMIES: string[];
  RACES: string[];
  CLASSES: string[];
}

export interface AffinityStats {
  LIFE: number;
  ORDER: number;
  DEATH: number;
  CHAOS: number;
  NATURE: number;
  MIGHT: number;
}

export interface Race {
  ID: string;          // lowercase identifier (e.g., "dwarf")
  LABEL: string;       // Display name (e.g., "Dwarf")
  DESCRIPTION?: string; // Optional description field
}

export type IRaceWithStats = Race & AffinityStats;

export interface PlayerClass {
  ID: string;          // lowercase identifier (e.g., "dwarf")
  LABEL: string;       // Display name (e.g., "Dwarf")
  DESCRIPTION?: string; // Optional description field
}

export type PlayerClassWithStats = Race & AffinityStats;

export interface PlayerHero {
  NAME: string;
  CLASS: string;
  FACTION: string;
  LEVEL: number;
  GOLD: number;
  XP: number;
  INVENTORY: any[]; // Replace `any` with a more specific type if possible (e.g., `Item[]`)
  LIFE: number;
  ORDER: number;
  DEATH: number;
  CHAOS: number;
  NATURE: number;
  MIGHT: number;
}

export interface GameState {
  gameLost: boolean;
  worldId: string;
  currentRoute: string;
  hero: PlayerHero | null;
  startRoom: any;
  dungeonRooms: any[];
}

export interface Room {
  ID: string;
  DESCRIPTION: string;
  NORTH: string | null;
  SOUTH: string | null;
  WEST: string | null;
  EAST: string | null;
  ENTRANCE: string | null;
}
