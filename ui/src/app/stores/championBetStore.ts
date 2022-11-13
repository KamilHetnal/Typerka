import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { ChampionBet, ChampionBetFormValues } from "../models/ChampionBet";

export default class ChampionBetStore {
    championBets: ChampionBet[] = [];
    championBetRegistry = new Map<string, ChampionBet>();
    championBet: ChampionBet | undefined = undefined;
    loading = false;
    loadingInitial = false;
    
    constructor() {
        makeAutoObservable(this);
      }
    //   get championBetsByDate() {
    //     return Array.from(this.championBetRegistry.values()).sort((a,b) => 
    //         a.championBetDate.getTime()- b.championBetDate.getTime())
    //   }
    
      loadChampionBets = async () => {
        this.setLoadingInitial(true);
        try {
          const championBets = await agent.ChampionBets.list();
          championBets.forEach((championBet) => {
            this.setChampionBet(championBet)
          });
          this.setLoadingInitial(false);
        } catch (error) {
          console.log(error);
          this.setLoadingInitial(false);
        }
      };
    
      loadChampionBet = async (id: string) => {
        let championBet = this.getChampionBet(id)
        if (championBet) {
          this.championBet = championBet;
          return championBet;
        } else {
          this.setLoadingInitial(true);
          try {
            const championBet = await agent.ChampionBets.details(id);
            runInAction(() => {
              this.championBet = championBet;
              this.setChampionBet(championBet);
            });
            this.setLoadingInitial(false);
            return this.championBet;
          } catch (error) {
            console.log(error);
            runInAction(() => this.setLoadingInitial(false));
          }
        }
      };
    
      createChampionBet = async (championBet: ChampionBetFormValues) => {
        try {
          await agent.ChampionBets.create(championBet);
          const newChampionBet = new ChampionBet(championBet);
          this.setChampionBet(newChampionBet);
          runInAction(() => {
            this.championBet = newChampionBet;
          });
        } catch (error) {
          console.log(error);
        }
      };
    
      updateChampionBet = async (championBet: ChampionBetFormValues) => {
        try {
          await agent.ChampionBets.update(championBet);
          runInAction(() => {
            if (championBet.id) {
              let updatedChampionBet = {
                ...this.getChampionBet(championBet.id),
                ...championBet,
              };
              this.championBetRegistry.set(championBet.id, updatedChampionBet as ChampionBet);
              this.championBet = updatedChampionBet as ChampionBet;
            }
          });
        } catch (error) {
          console.log(error);
        }
      };
    
      deleteChampionBet = async (id: string) => {
        try {
          await agent.ChampionBets.delete(id);
          runInAction(() => {
            this.championBetRegistry.delete(id);
          });
        } catch (error) {
          console.log(error);
        }
      };
    
      private setChampionBet = (championBet: ChampionBet) => {
        return this.championBetRegistry.set(championBet.id, championBet);
      }
    
      private getChampionBet = (id: string) => {
        return this.championBetRegistry.get(id);
      }
    
      setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
      };
}