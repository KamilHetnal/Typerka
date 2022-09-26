import axios, { AxiosResponse } from 'axios';
import { Match } from '../models/Match';
import { Team } from '../models/Team';

const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}

axios.defaults.baseURL = 'http://localhost:5000/api/';

axios.interceptors.response.use(async response => {
    try {
        await sleep(250);
        return response;
    } catch (error) {
        console.log(error);
        return await Promise.reject(error);
    }
})

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T> (url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    delete: <T> (url: string) => axios.delete<T>(url).then(responseBody),
}

const Teams = {
    list: () => requests.get<Team[]>('teams'),
    details: (id: string) => requests.get<Team>(`teams/${id}`),
    update: (team: Team) => requests.put<void>(`teams/${team.id}`, team)
}

const Matches = {
    list: () => requests.get<Match[]>('matches'),
    details: (id: string) => requests.get<Team>(`matches/${id}`),
    update: (match: Team) => requests.put<void>(`matches/${match.id}`, match)
}

const agent = {
    Teams,
    Matches
}

export default agent;