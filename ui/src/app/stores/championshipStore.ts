import { makeAutoObservable, runInAction } from 'mobx';
import agent from '../api/agent';
import { Championship, ChampionshipFormValue } from '../models/Championship';

export default class ChampionshipStore {
  championships: Championship[] = [];
  championshipRegistry = new Map<string, Championship>();
  championship: Championship | undefined = undefined;
  loading = false;
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
  }

  get championshipsByCountry() {
    return Array.from(this.championshipRegistry.values()).sort((a,b) => 
        a.country.localeCompare(b.country))
  }

  loadChampionships = async () => {
    this.setLoadingInitial(true);
    try {
      const championships = await agent.Championships.list();
      championships.forEach((championship) => {
        this.setChampionship(championship);
      });
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);
      this.setLoadingInitial(false);
    }
  };

  loadChampionship = async (id: string) => {
    let championship = this.getChampionship(id);
    if (championship) {
      this.championship = championship;
      return championship;
    } else {
      this.setLoadingInitial(true);
      try {
        const championship = await agent.Championships.details(id);
        runInAction(() => {
          this.championship = championship;
          this.setChampionship(championship);
        });
        this.setLoadingInitial(false);
        return this.championship;
      } catch (error) {
        console.log(error);
        runInAction(() => this.setLoadingInitial(false));
      }
    }
  };

  updateChampionship = async (championship: ChampionshipFormValue) => {
    this.setLoadingInitial(true);
    try {
      await agent.Championships.update(championship);
      runInAction(() => {
        if (championship.id) {
          let updatedChampionship = {
            ...this.getChampionship(championship.id),
            ...championship,
          };
          this.championshipRegistry.set(championship.id, updatedChampionship as Championship);
          this.championship = updatedChampionship as Championship;
        }})
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.setLoadingInitial(false);
      });
    }
  };

  private setChampionship = (championship: Championship) => {
    return this.championshipRegistry.set(championship.id, championship);
  };

  private getChampionship = (id: string) => {
    return this.championshipRegistry.get(id);
  };

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };
}
