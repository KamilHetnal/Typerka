import { Match } from "./Match";
import { Player } from "./Player";

export interface Team {
  id: string;
  name: string;
  group: string;
  info: string;
  bestResult: string;
  bestResultDates: string;
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
  constructor(init?: TeamFormValues) {
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

export class TeamFormValues {
  id?: string = undefined;
  name?: string = undefined;
  group?: string = undefined;
  matchesPlayed: number = 0;
  wins: number = 0;
  losses: number = 0;
  draws: number = 0;
  goalsScored: number = 0;
  goalsConceded: number = 0;
  points: number = 0;

  constructor(team?: TeamFormValues) {
      if(team) {
          this.id = team.id;
          this.name = team.name;
          this.group = team.group;
          this.matchesPlayed = team.matchesPlayed;
          this.wins = team.wins;
          this.losses = team.losses;
          this.draws = team.draws;
          this.goalsScored = team.goalsScored;
          this.goalsConceded = team.goalsConceded;
          this.points = team.points;
      }
  }
}


