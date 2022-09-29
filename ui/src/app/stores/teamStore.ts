import { makeAutoObservable, runInAction } from 'mobx';
import agent from '../api/agent';
import { Team } from '../models/Team';

export default class TeamStore {
  teams: Team[] = [];
  teamRegistry = new Map<string, Team>();
  team: Team | undefined = undefined;
  loading = false;
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
  }

  get teamsInGroups() {
    return Array.from(this.teamRegistry.values()).sort((a, b) => a.group.localeCompare(b.group))
  }

  get groupedTeams() {
    return Object.entries(
      this.teamsInGroups.reduce((teams, team) => {
        teams[team.group] = teams[team.group]
          ? [...teams[team.group], team].sort((a,b) => a.points - b.points)
          : [team].sort((a,b) => a.points - b.points)
          return teams
      }, {} as { [key: string]: Team[]})
    );
  }

  loadTeams = async () => {
    this.setLoadingInitial(true);
    try {
      const teams = await agent.Teams.list();
      teams.forEach((team) => {
        this.setTeam(team)
      });
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);
      this.setLoadingInitial(false);
    }
  };

  loadTeam = async (id: string) => {
    let team = this.getTeam(id);
    if (team) {
      this.team = team;
    } else {
      this.setLoadingInitial(true)
      try {
        team = await agent.Teams.details(id);
        this.setTeam(team);
        runInAction(() => {this.team = team; })
        this.setLoadingInitial(false);
      } catch (error) {
        console.log(error)
        runInAction(() => { this.setLoadingInitial(false) })
      }
    }
  }

  private setTeam = (team: Team) => {
    return this.teamRegistry.set(team.id, team);
  }

  private getTeam = (id: string) => {
    return this.teamRegistry.get(id);
  }

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };
  updateTeam =async (team:Team) => {
    
    this.loading = true;
    try {
        await agent.Teams.update(team);
        runInAction(() => {
            this.teamRegistry.set(team.id, team);
            this.loading = false;
        })
    }catch (error) {
        console.log(error);
        runInAction(() => {
            this.loading = false;
        })
    }
  }
}
