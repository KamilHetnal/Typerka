export interface Player {
    id: string;
    name: string;
    position: string;
    goals: number;
    teamId: string;
  }
  
  export class Player implements Player {
    constructor(init?: PlayerFormValues) {
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

  export class PlayerFormValues {
    id?: string = undefined;
    name?: string = undefined;
    position?: string = undefined;
    goals?: number = undefined;
    teamId?: string = undefined;
  
    constructor(player?: PlayerFormValues) {
        if(player) {
            this.id = player.id;
            this.name = player.name;
            this.position = player.position;
            this.goals = player.goals;
            this.teamId = player.teamId
        }
    }
  }