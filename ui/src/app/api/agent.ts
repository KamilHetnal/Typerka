import axios, { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { history } from '../..';
import { Match } from '../models/Match';
import { Team } from '../models/Team';
import { store } from '../stores/store';

const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

axios.defaults.baseURL = 'http://localhost:5000/api/';

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
  delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Teams = {
  list: () => requests.get<Team[]>('teams'),
  details: (id: string) => requests.get<Team>(`teams/${id}`),
  update: (team: Team) => requests.put<void>(`teams/${team.id}`, team),
};

const Matches = {
  list: () => requests.get<Match[]>('matches'),
  details: (id: string) => requests.get<Team>(`matches/${id}`),
  update: (match: Team) => requests.put<void>(`matches/${match.id}`, match),
};

const agent = {
  Teams,
  Matches,
};

export default agent;
