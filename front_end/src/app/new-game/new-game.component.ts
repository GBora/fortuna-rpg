import {Component, OnInit} from '@angular/core';
import {NgOptionComponent, NgSelectComponent} from '@ng-select/ng-select';
import {FormsModule} from '@angular/forms';
import {IFaction, PlayerClassWithStats, IRaceWithStats, GameState} from '../interfaces/interfaces';
import {getPlayerFactions} from '../api-access/get-player-factions';
import {getPlayerRace} from '../api-access/get-player-race';
import {RacePanelComponent} from '../race-panel/race-panel.component';
import {getPlayerClass} from '../api-access/get-player-class';
import {ClassPanelComponent} from '../class-panel/class-panel.component';
import {startGame} from '../api-access/start_game';
import {combineCommonFields} from '../fe-utils/combineCommonFields';
// import {GameState} from '../data-store/dataStore';
import {saveGameStateCurrent} from '../services/storage-service.service';
import {addRooms} from '../room-utils/roomUtils';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-game',
  imports: [
    NgSelectComponent,
    NgOptionComponent,
    FormsModule,
    RacePanelComponent,
    ClassPanelComponent
  ],
  templateUrl: './new-game.component.html',
  styleUrl: './new-game.component.scss'
})
export class NewGameComponent implements OnInit  {
  factionOptions: IFaction[] = [];

  selectedFaction: IFaction | null = null;
  selectedRace: IRaceWithStats | null = null;
  selectedClass: PlayerClassWithStats | null = null;

  selectedRaceId: string | null = null;
  selectedClassId: string | null = null;
  selectedName: string | null = null

  constructor(private router: Router) {}

  async ngOnInit(): Promise<void> {
    this.factionOptions = await getPlayerFactions();
  }

  async onRaceChanged(event: any) {
    this.selectedRace = await getPlayerRace(event);
  }

  async onClassChanged(event: any) {
    this.selectedClass = await getPlayerClass(event);
  }

  async startPlay() {
    let playerCharacter = {
      NAME: this.selectedName,
      CLASS: this.selectedClass.LABEL,
      FACTION: this.selectedFaction.LABEL,
      LEVEL: 1,
      GOLD: 0,
      XP: 0,
      INVENTORY: [],
      LIFE: 0,
      ORDER: 0,
      DEATH: 0,
      CHAOS: 0,
      NATURE: 0,
      MIGHT: 0
    }
    playerCharacter = combineCommonFields(playerCharacter, this.selectedClass);
    playerCharacter = combineCommonFields(playerCharacter, this.selectedRace);
    let gameState: GameState = {
      gameLost: false,
      worldId: "NULL",
      currentRoute: "new-game",
      hero: playerCharacter,
      startRoom: {},
      dungeonRooms: []
    };
    gameState = addRooms(gameState);
    gameState = await startGame(gameState);
    saveGameStateCurrent(gameState);
    let startRoomId = gameState.startRoom.ID;
    console.log(startRoomId);
    await this.router.navigate(['/game-room', startRoomId]);
  }
}
