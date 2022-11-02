import { makeAutoObservable, runInAction } from 'mobx';
import agent from '../api/agent';
import { Bet, BetFormValues } from '../models/Bet';

export default class BetStore {
  bets: Bet[] = [];
  betRegistry = new Map<string, Bet>();
  bet: Bet | undefined = undefined;
  loading = false;
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
  }
//   get betsByDate() {
//     return Array.from(this.betRegistry.values()).sort((a,b) => 
//         a.betDate.getTime()- b.betDate.getTime())
//   }

  loadBets = async () => {
    this.setLoadingInitial(true);
    try {
      const bets = await agent.Bets.list();
      bets.forEach((bet) => {
        this.setBet(bet)
      });
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);
      this.setLoadingInitial(false);
    }
  };

  loadBet = async (id: string) => {
    let bet = this.getBet(id)
    if (bet) {
      this.bet = bet;
      return bet;
    } else {
      this.setLoadingInitial(true);
      try {
        const bet = await agent.Bets.details(id);
        runInAction(() => {
          this.bet = bet;
          this.setBet(bet);
        });
        this.setLoadingInitial(false);
        return this.bet;
      } catch (error) {
        console.log(error);
        runInAction(() => this.setLoadingInitial(false));
      }
    }
  };

  createBet = async (bet: BetFormValues) => {
    try {
      await agent.Bets.create(bet);
      const newBet = new Bet(bet);
      this.setBet(newBet);
      runInAction(() => {
        this.bet = newBet;
      });
    } catch (error) {
      console.log(error);
    }
  };

  updateBet = async (bet: BetFormValues) => {
    try {
      await agent.Bets.update(bet);
      runInAction(() => {
        if (bet.id) {
          let updatedBet = {
            ...this.getBet(bet.id),
            ...bet,
          };
          this.betRegistry.set(bet.id, updatedBet as Bet);
          this.bet = updatedBet as Bet;
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  deleteBet = async (id: string) => {
    try {
      await agent.Bets.delete(id);
      runInAction(() => {
        this.betRegistry.delete(id);
      });
    } catch (error) {
      console.log(error);
    }
  };

  private setBet = (bet: Bet) => {
    return this.betRegistry.set(bet.id, bet);
  }

  private getBet = (id: string) => {
    return this.betRegistry.get(id);
  }

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };
}
