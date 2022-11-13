import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { TopScorerBet, TopScorerBetFormValues } from "../models/TopScorerBet";

export default class TopScorerBetStore {
    topScorerBets: TopScorerBet[] = [];
    topScorerBetRegistry = new Map<string, TopScorerBet>();
    topScorerBet: TopScorerBet | undefined = undefined;
    loading = false;
    loadingInitial = false;
    
  constructor() {
    makeAutoObservable(this);
  }
  get betsInGroups() {
    return Array.from(this.topScorerBetRegistry.values()).sort((a, b) => a.topScorerId?.localeCompare(b.topScorerId))
  }

  get groupedBets() {
    return Object.entries(
      this.betsInGroups.reduce((bets, bet) => {
        bets[bet.topScorerId] = bets[bet.topScorerId]
          ? [...bets[bet.topScorerId], bet]
          : [bet]
          return bets
      }, {} as { [key: string]: TopScorerBet[]})
    );
  }

  loadTopScorerBets = async () => {
    this.setLoadingInitial(true);
    try {
      const topScorerBets = await agent.TopScorerBets.list();
      topScorerBets.forEach((topScorerBet) => {
        this.setTopScorerBet(topScorerBet)
      });
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);
      this.setLoadingInitial(false);
    }
  };

  loadTopScorerBet = async (id: string) => {
    let topScorerBet = this.getTopScorerBet(id)
    if (topScorerBet) {
      this.topScorerBet = topScorerBet;
      return topScorerBet;
    } else {
      this.setLoadingInitial(true);
      try {
        const topScorerBet = await agent.TopScorerBets.details(id);
        runInAction(() => {
          this.topScorerBet = topScorerBet;
          this.setTopScorerBet(topScorerBet);
        });
        this.setLoadingInitial(false);
        return this.topScorerBet;
      } catch (error) {
        console.log(error);
        runInAction(() => this.setLoadingInitial(false));
      }
    }
  };

  createTopScorerBet = async (topScorerBet: TopScorerBetFormValues) => {
    try {
      await agent.TopScorerBets.create(topScorerBet);
      const newBet = new TopScorerBet(topScorerBet);
      this.setTopScorerBet(newBet);
      runInAction(() => {
        this.topScorerBet = newBet;
      });
    } catch (error) {
      console.log(error);
    }
  };

  updateTopScorerBet = async (topScorerBet: TopScorerBetFormValues) => {
    try {
      await agent.TopScorerBets.update(topScorerBet);
      runInAction(() => {
        if (topScorerBet.id) {
          let updatedBet = {
            ...this.getTopScorerBet(topScorerBet.id),
            ...topScorerBet,
          };
          this.topScorerBetRegistry.set(topScorerBet.id, updatedBet as TopScorerBet);
          this.topScorerBet = updatedBet as TopScorerBet;
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  deleteTopScorerBet = async (id: string) => {
    try {
      await agent.TopScorerBets.delete(id);
      runInAction(() => {
        this.topScorerBetRegistry.delete(id);
      });
    } catch (error) {
      console.log(error);
    }
  };

  private setTopScorerBet = (topScorerBet: TopScorerBet) => {
    return this.topScorerBetRegistry.set(topScorerBet.id, topScorerBet);
  }

  private getTopScorerBet = (id: string) => {
    return this.topScorerBetRegistry.get(id);
  }

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };
}