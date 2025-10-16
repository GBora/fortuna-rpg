import {GameState, Room} from '../../interfaces/interfaces';
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import Chance from 'chance';
import {getRandomOppositeFaction} from '../lore-utils/getOppositeFaction';

const chance = new Chance();

export const getBasicRoom = (): Room => {
  let room: Room = {
    ID: uuidv4(),
    DESCRIPTION: "Default room",
    EAST: "",
    NORTH: "",
    WEST: "",
    SOUTH: "",
    ENTRANCE: ""
  }

  return room;
}

export const getRandomDirection = (entry: string): string => {
  const directionOptions = ["NORTH", "SOUTH", "WEST", "EAST"];
  let weights = [1, 1, 1, 1];
  let entryIndex = directionOptions.indexOf(entry);
  weights[entryIndex] = 0; // do not pick the entry
  return chance.weighted(directionOptions, weights)
}

const getDirectionOpposite = (dir: string): string => {
  let opo = {
    EAST: "WEST",
    NORTH: "SOUTH",
    WEST: "EAST",
    SOUTH: "NORTH",
  }

  return opo[dir];
}

export const getBossRoom = (initialGame: GameState): Room => {
  let theRoom = getBasicRoom();
  theRoom.DESCRIPTION = `Boss for ${initialGame.hero.FACTION}`
  return theRoom;
};

export const getRandomRoom = (initialGame: GameState): Room => {
  let roomOptions = ['monster', 'vendor']
  let theRoom = getBasicRoom();
  theRoom.DESCRIPTION = chance.weighted(roomOptions, [10, 1]);
  return theRoom;
};

export const addStartRoom = (initialGame: GameState): GameState => {
  let newGame = _.cloneDeep(initialGame);
  // Oh hi Mark (The Room reference)
  let theRoom = getBasicRoom();
  //TODO: move this outside enemy to be consistent
  let ENEMY = getRandomOppositeFaction(initialGame.hero.FACTION);
  theRoom.DESCRIPTION = `Wellcome my disciple of ${initialGame.hero.FACTION} I have need of your heroism, the dark goddess of ${ENEMY.LABEL}`;
  theRoom.ENTRANCE = "SOUTH" // The next room is north so it makes sense the entrance would be south
  newGame.dungeonRooms.push(theRoom);
  newGame.startRoom = theRoom;
  return  newGame
};

export const addMainPath = (initialGame: GameState): GameState => {
  let newGame = _.cloneDeep(initialGame);

  let vendorRoom = getBasicRoom();
  vendorRoom.DESCRIPTION = `Vendor room for ${initialGame.hero.FACTION}`;
  vendorRoom.ENTRANCE = "SOUTH";
  newGame.startRoom.NORTH = vendorRoom.ID;
  newGame.dungeonRooms.push(vendorRoom);
  let happyPathLength = chance.integer({ min: 1, max: 10 });
  let lastRoom = vendorRoom;
  //do a for each building random rooms and binding them to last and then updating last
  for (let i = 0; i < happyPathLength; i++) {
    let newRoom = getRandomRoom(newGame);
    let newRoomDirection = getRandomDirection(lastRoom.ENTRANCE);
    lastRoom[newRoomDirection] = newRoom.ID
    newRoom.ENTRANCE = getDirectionOpposite(newRoomDirection);
    newGame.dungeonRooms.push(newRoom)
    lastRoom = newRoom;
  }
  let bossRoom = getBossRoom(newGame);
  let newRoomDirection = getRandomDirection(lastRoom.ENTRANCE);
  lastRoom[newRoomDirection] = bossRoom.ID
  bossRoom.ENTRANCE = getDirectionOpposite(newRoomDirection);
  newGame.dungeonRooms.push(bossRoom)
  return  newGame
};

export const addRooms = (initialGame: GameState): GameState => {
  let newGame = _.cloneDeep(initialGame);
  let ENEMY = getRandomOppositeFaction(initialGame.hero.FACTION);
  newGame = addStartRoom(newGame);
  newGame = addMainPath(newGame);
  return newGame;
}
