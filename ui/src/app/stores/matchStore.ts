import { format } from 'date-fns';
import { makeAutoObservable, runInAction } from 'mobx';
import agent from '../api/agent';
import { Match, MatchFormValues } from '../models/Match';

export default class MatchStore {
  matchRegistry = new Map<string, Match>();
  match: Match | undefined = undefined;
  loading = false;
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
  }
  get matches() {
    return Array.from(this.matchRegistry.values())
    .sort((a,b) => a.matchDate.getTime()- b.matchDate.getTime())
  }

  get groupedMatches() {
    return Object.entries(
      this.matches.reduce((matches, match) => {
        const date = format(match.matchDate!, 'dd-MM');
        matches[date] = matches[date]
          ? [...matches[date], match]
          : [match];
        return matches;
      }, {} as { [key: string]: Match[] })
    );
  }

  loadMatches = async () => {
    this.setLoadingInitial(true);
    try {
      const matches = await agent.Matches.list();
      matches.forEach((match) => {
        runInAction(() => this.setMatch(match))
      });
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);
      this.setLoadingInitial(false);
    }
  };

  loadMatch = async (id: string) => {
    let match = this.getMatch(id);
    if (match) {
      this.match = match;
      return match;
    } else {
      this.setLoadingInitial(true);
      try {
        const match = await agent.Matches.details(id);
        runInAction(() => {
          this.match = match;
          this.setMatch(match);
        });
        this.setLoadingInitial(false);
        return this.match;
      } catch (error) {
        console.log(error);
        runInAction(() => this.setLoadingInitial(false));
      }
    }
  };

  createMatch = async (match: MatchFormValues) => {
    this.setLoadingInitial(true)
    try {
      await agent.Matches.create(match);
      const newMatch = new Match(match);
      this.setMatch(newMatch);
      runInAction(() => {
        this.match = newMatch;
        this.setLoadingInitial(false)
      });
    } catch (error) {
      console.log(error);
      this.setLoadingInitial(false)
    }
  };

  updateMatch = async (match: MatchFormValues) => {
    try {
      await agent.Matches.update(match);
      runInAction(() => {
        if (match.id) {
          let updatedMatch = {
            ...this.getMatch(match.id),
            ...match,
          };
          this.matchRegistry.set(match.id, updatedMatch as Match);
          this.match = updatedMatch as Match;
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  deleteMatch = async (id: string) => {
    try {
      await agent.Matches.delete(id);
      runInAction(() => {
        this.matchRegistry.delete(id);
      });
    } catch (error) {
      console.log(error);
    }
  };

  private setMatch = (match: Match) => {
    match.matchDate = new Date(match.matchDate!)
    return this.matchRegistry.set(match.id, match);
  }

  private getMatch = (id: string) => {
    return this.matchRegistry.get(id);
  }

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };
}
