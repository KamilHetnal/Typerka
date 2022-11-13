import { makeAutoObservable, runInAction } from 'mobx';
import agent from '../api/agent';
import { Player } from '../models/Player';

export default class PlayerStore {
  players: Player[] = [];
  playerRegistry = new Map<string, Player>();
  player: Player | undefined = undefined;
  loading = false;
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
  }

  sortingArr = ['Bramkarz', 'Obrońca', 'Pomocnik', 'Napastnik']
  
  get playersOnPosition() {
    return Array.from(this.playerRegistry.values()).sort((a, b) => this.sortingArr.indexOf(a.position) - this.sortingArr.indexOf(b.position))
  }

  get groupedPlayers() {
    return Object.entries(
      this.playersOnPosition.reduce((players, player) => {
        players[player.position] = players[player.position]
          ? [...players[player.position], player].sort((a,b) => a.name.localeCompare(b.name))
          : [player]
          return players
      }, {} as { [key: string]: Player[]})
    );
  }

  loadPlayers = async () => {
    this.setLoadingInitial(true);
    try {
      const players = await agent.Players.list();
      players.forEach((player) => {
        this.setPlayer(player);
      });
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);
      this.setLoadingInitial(false);
    }
  };
  loadPlayersInTeam = async (id: string) => {
    this.setLoadingInitial(true);
    try {
      const players = await agent.Players.listInTeam(id);
      players.forEach((player) => {
        this.setPlayer(player);
      });
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);
      this.setLoadingInitial(false);
    }
  };

  loadPlayer = async (id: string) => {
    let player = this.getPlayer(id);
    if (player) {
      this.player = player;
      return player;
    } else {
      this.setLoadingInitial(true);
      try {
        const player = await agent.Players.details(id);
        runInAction(() => {
          this.player = player;
          this.setPlayer(player);
        });
        this.setLoadingInitial(false);
        return this.player;
      } catch (error) {
        console.log(error);
        runInAction(() => this.setLoadingInitial(false));
      }
    }
  };

  updatePlayer = async (player: Player) => {
    this.setLoadingInitial(true);
    try {
      await agent.Players.update(player);
      runInAction(() => {
        this.playerRegistry.set(player.id, player);
        this.setLoadingInitial(false);
      });
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.setLoadingInitial(false);
      });
    }
  };

  private setPlayer = (player: Player) => {
    return this.playerRegistry.set(player.id, player);
  };

  private getPlayer = (id: string) => {
    return this.playerRegistry.get(id);
  };

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };
}
