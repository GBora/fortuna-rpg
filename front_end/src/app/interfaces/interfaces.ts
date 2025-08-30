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

export type IPlayerClassWithStats = Race & AffinityStats;
