import { Player } from "./Player";

export interface Team {
  id: string;
  name: string;
  group: string;
  matchesPlayed: number;
  wins: number;
  losses: number;
  draws: number;
  goalsScored: number;
  goalsConceded: number;
  points: number;
  players: Player[];
}

export class Team implements Team {
  constructor(init?: TeamDto) {
    Object.assign(this, init);
  }
}

export class TeamDto {
  id?: string = undefined;

  constructor(team?: TeamDto) {
    if (team) {
      this.id = team.id;
    }
  }
}


