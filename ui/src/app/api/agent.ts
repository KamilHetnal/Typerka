import axios, { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { Match, MatchFormValues } from '../models/Match';
import { Team } from '../models/Team';
import { User, UserFromValues } from '../models/User';
import { store } from '../stores/store';
import { history } from '../..';
import { Photo, Profile } from '../models/Profile';
import { Role, RoleFormValues } from '../models/Role';
import { UserRole } from '../models/UserRole';
import { Bet, BetFormValues } from '../models/Bet';
import { Player } from '../models/Player';
import { Championship } from '../models/Championship';
import { TopScorerBet, TopScorerBetFormValues } from '../models/TopScorerBet';
import { ChampionBet, ChampionBetFormValues } from '../models/ChampionBet';

const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};


axios.defaults.baseURL = 'http://localhost:5000/api/';

axios.interceptors.request.use(config => {
  const token = store.commonStore.token;
  if (token) config.headers!.Authorization = `Bearer ${token}`
  return config;
})

axios.interceptors.response.use(
  async (response) => {
    await sleep(250);
    return response;
  },
  (error: AxiosError) => {
    const { data, status, config } = error.response!;
    switch (status) {
      case 400:
        if (typeof data == 'string') {
          toast.error(data);
        }
        if (config.method === 'get' && data.errors.hasOwnProperty('id')) {
          history.push('/not-found');
        }
        if (data.errors) {
          const modalStateError = [];
          for (const key in data.errors) {
            if (data.errors[key]) {
              modalStateError.push(data.errors[key]);
            }
          }
          throw modalStateError.flat();
        }
        break;
      case 401:
        toast.error('unauthorized');
        break;
      case 404:
        toast.error('not found');
        history.push('/not-found');
        break;
      case 500:
        store.commonStore.setServerError(data);
        history.push('/server-error');
        break;
    }
    return Promise.reject(error);
  }
);

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Account = {
  current: () => requests.get<User>('/account'),
  login: (user: UserFromValues) => requests.post<User>('/account/login', user),
  register: (user: UserFromValues) =>
    requests.post<User>('/account/register', user),
};

const Championships = {
  list: () => requests.get<Championship[]>('championships'),
  details: (id: string) => requests.get<Championship>(`championships/${id}`),
  update: (championship: Championship) => requests.put<void>(`championships/${championship.id}`, championship),
};

const Teams = {
  list: () => requests.get<Team[]>('teams'),
  details: (id: string) => requests.get<Team>(`teams/${id}`),
  update: (team: Team) => requests.put<void>(`teams/${team.id}`, team),
};

const Players = {
  list: () => requests.get<Player[]>('players'),
  listInTeam: (id: string) => requests.get<Player[]>(`players/team/${id}`),
  details: (id: string) => requests.get<Player>(`players/${id}`),
  update: (player: Player) => requests.put<void>(`players/${player.id}`, player),
};

const Matches = {
  list: () => requests.get<Match[]>('matches'),
  listForTeam: (id: string) => requests.get<Match[]>(`matches/team/${id}`),
  details: (id: string) => requests.get<Match>(`matches/${id}`),
  create: (match: MatchFormValues) => requests.post<void>(`/matches/`, match),
  update: (match: MatchFormValues) => requests.put<void>(`matches/${match.id}`, match),
  delete: (id: string) => requests.del<void>(`/matches/${id}`),
};

const Bets = {
  list: () => requests.get<Bet[]>('bets'),
  details: (id: string) => requests.get<Bet>(`bets/${id}`),
  create: (bet: BetFormValues) => requests.post<void>(`bets/`, bet),
  update: (bet: BetFormValues) => requests.put<void>(`bets/${bet.id}`, bet),
  delete: (id: string) => requests.del<void>(`bets/${id}`),
};

const TopScorerBets = {
  list: () => requests.get<TopScorerBet[]>('top-scorer-bets'),
  details: (id: string) => requests.get<TopScorerBet>(`top-scorer-bets/${id}`),
  create: (bet: TopScorerBetFormValues) => requests.post<void>(`top-scorer-bets/`, bet),
  update: (bet: TopScorerBetFormValues) => requests.put<void>(`top-scorer-bets/${bet.id}`, bet),
  delete: (id: string) => requests.del<void>(`top-scorer-bets/${id}`),
};

const ChampionBets = {
  list: () => requests.get<ChampionBet[]>('bets'),
  details: (id: string) => requests.get<ChampionBet>(`bets/${id}`),
  create: (bet: ChampionBetFormValues) => requests.post<void>(`bets/`, bet),
  update: (bet: ChampionBetFormValues) => requests.put<void>(`bets/${bet.id}`, bet),
  delete: (id: string) => requests.del<void>(`bets/${id}`),
};

const Profiles = {
  list: () => requests.get<Profile[]>('/profiles/'),
  get: (userName: string) => requests.get<Profile>(`/profiles/${userName}`),
  delete: (id: string) => requests.del<void>(`/profiles/${id}`),
  uploadPhoto: (file: Blob) => {
    let formData = new FormData();
    formData.append('File', file);
    return axios.post<Photo>('photos', formData, {
      headers: { 'Content-type': 'multipart/form-data' },
    });
  },
  setMainPhoto: (id: string) => requests.post(`/photos/${id}/setMain`, {}),
  deletePhoto: (id: string) => requests.del(`/photos/${id}`),
};

const Roles = {
  list: () => requests.get<Role[]>('/roles'),
  userRoleList: () => requests.get<UserRole[]>('/roles/userroles'),
  details: (id: string) => requests.get<Role>(`/roles/${id}`),
  create: (role: RoleFormValues) => requests.post<void>(`/roles/`, role),
  update: (role: RoleFormValues) => requests.put<void>(`/roles/${role.id}`, role),
  delete: (id: string) => requests.del<void>(`/roles/${id}`),
  addToRole: (roleName: string, userName: string) =>
  requests.post<void>(
    `/roles/${roleName}/${userName}/addtorole`,
    {}
  ),
  removeFromRole: (roleName: string, userName: string) =>
  requests.post<void>(
    `/roles/${roleName}/${userName}/removefromrole`,
    {}
  ),  
};

const agent = {
  Account,
  Championships,
  Teams,
  Players,
  Matches,
  Bets,
  ChampionBets,
  TopScorerBets,
  Profiles,
  Roles
};

export default agent;
