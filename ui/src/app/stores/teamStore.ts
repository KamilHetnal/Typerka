import { makeAutoObservable, runInAction } from 'mobx';
import agent from '../api/agent';
import { Team, TeamFormValues } from '../models/Team';

export default class TeamStore {
  teamRegistry = new Map<string, Team>();
  team: Team | undefined = undefined;
  loading = false;
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
  }

  get teams() {
    return Array.from(this.teamRegistry.values())
      .sort((a,b) => a.group?.localeCompare(b.group))
      .sort((b,a) => a.points - b.points)
      .sort((b,a) => (a.goalsScored - a.goalsConceded) - (b.goalsScored - b.goalsConceded))
  }

  get groupedTeams() {
    return Object.entries(
      this.teams.reduce((teams, team) => {
        teams[team.group] = teams[team.group]
          ? [...teams[team.group], team]
          : [team]
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
      return team;
    } else {
      this.setLoadingInitial(true)
      try {
        const team = await agent.Teams.details(id);
        runInAction(() => {
          this.team = team; 
          this.setTeam(team);
        })
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

  updateTeam =async (team:TeamFormValues) => {
    try {
      await agent.Teams.update(team);
      runInAction(() => {
        if (team.id) {
          let updatedTeam = {
            ...this.getTeam(team.id),
            ...team,
          };
          this.teamRegistry.set(team.id, updatedTeam as Team);
          this.team = updatedTeam as Team;
        }
      });
    }catch (error) {
        console.log(error);
        runInAction(() => {
            this.loading = false;
        })
    }
  }
}
