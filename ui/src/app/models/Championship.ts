export interface Championship {
  id: string;
  title: string;
  country: string;
  winnerId: string;
  topScorerId: string;
}

export class Championship implements Championship {
  constructor(init?: ChampionshipDto) {
    Object.assign(this, init);
  }
}

export class ChampionshipDto {
  id?: string = undefined;

  constructor(championship?: ChampionshipDto) {
    if (championship) {
      this.id = championship.id;
    }
  }
}
export class ChampionshipFormValue {
  id?: string = undefined;
  title?: string = undefined;
  country?: string = undefined;
  winnerId?: string = undefined;
  topScorerId?: string = undefined;

  constructor(championship?: ChampionshipFormValue) {
      if(championship) {
          this.id = championship.id;
          this.title = championship.title;
          this.country = championship.country;
          this.winnerId = championship.winnerId;
          this.topScorerId = championship.topScorerId;

      }
  }
}