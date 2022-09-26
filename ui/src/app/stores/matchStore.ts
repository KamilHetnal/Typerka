import { makeAutoObservable } from 'mobx';
import agent from '../api/agent';
import { Match } from '../models/Match';

export default class MatchStore {
  matches: Match[] = [];
  matchRegistry = new Map<string, Match>();
  match: Match | undefined = undefined;
  loading = false;
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
  }
  get matchesByDate() {
    return Array.from(this.matchRegistry.values()).sort((a,b) => 
        Date.parse(a.matchDate) - Date.parse(b.matchDate))
  }

  loadMatches = async () => {
    this.setLoadingInitial(true);
    try {
      const matches = await agent.Matches.list();
      matches.forEach((match) => {
        this.setMatch(match)
      });
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);
      this.setLoadingInitial(false);
    }
  };

  private setMatch = (match: Match) => {
    return this.matchRegistry.set(match.id, match);
  }

  private getMatch = (id: string) => {
    return this.matchRegistry.get(id);
  }

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };
}
