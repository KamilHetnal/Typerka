export interface Player {
    id: string;
    name: string;
    position: string;
    goals: number;
    teamId: string;
  }
  
  export class Player implements Player {
    constructor(init?: PlayerDto) {
      Object.assign(this, init);
    }
  }
  
  export class PlayerDto {
    id?: string = undefined;
  
    constructor(player?: PlayerDto) {
      if (player) {
        this.id = player.id;
      }
    }
  }