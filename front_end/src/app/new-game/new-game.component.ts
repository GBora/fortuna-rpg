import {Component, OnInit} from '@angular/core';
import {NgOptionComponent, NgSelectComponent} from '@ng-select/ng-select';
import {FormsModule} from '@angular/forms';
import {IFaction, IPlayerClassWithStats, IRaceWithStats} from '../interfaces/interfaces';
import {getPlayerFactions} from '../api-access/get-player-factions';
import {getPlayerRace} from '../api-access/get-player-race';
import {RacePanelComponent} from '../race-panel/race-panel.component';
import {getPlayerClass} from '../api-access/get-player-class';
import {ClassPanelComponent} from '../class-panel/class-panel.component';
import {startGame} from '../api-access/start_game';

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
export class NewGameComponent implements OnInit{
  factionOptions: IFaction[] = [];

  selectedFaction: IFaction | null = null;
  selectedRace: IRaceWithStats | null = null;
  selectedClass: IPlayerClassWithStats | null = null;

  selectedRaceId: string | null = null;
  selectedClassId: string | null = null;
  selectedName: string | null = null

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
      FACTION: this.selectedFaction.LABEL
    }
    // create object for new world merge race, class and name
    let gameId = await startGame(playerCharacter);
    // save ID
  }
}
