import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { history } from '../..';
import { User, UserFromValues } from "../models/User";
import { store } from "./store";
import jwt_decode from 'jwt-decode'

export default class UserStore {
    user: User | null = null;

    constructor() {
        makeAutoObservable(this)
    }

    get isLoggedin() {
        return !!this.user;
    }

    login = async (creds: UserFromValues) => {
        try {
            const user = await agent.Account.login(creds)
            store.commonStore.setToken(user.token);
            runInAction(() => this.user = user);
            history.push('/');
            store.modalStore.closeModal();
        } catch (error) {
            throw error;
        }
    }
    logout = () => {
        store.commonStore.setToken(null);
        window.localStorage.removeItem('jwt');
        history.push('/');
        this.user = null;
    }

    getUser = async () => {
        try {
            const user = await agent.Account.current();
            runInAction(() => this.user = user);
        } catch (error) {
            console.log(error);
        }
    }

    register = async (creds: UserFromValues) => {
        try {
            const user = await agent.Account.register(creds)
            store.commonStore.setToken(user.token);
            runInAction(() => this.user = user);;
            history.push('/');
            store.modalStore.closeModal();
        } catch (error) {
            throw error;
        }
    }

    setImage = (image: string) => {
        if(this.user) this.user.image = image;
    }

    getRoles() {
        interface TokenDto {
            role?: string;
            unique_name?: string;
        }
        const decoded = jwt_decode(localStorage.getItem('jwt')!) as TokenDto;
    
        return decoded.role;
    }

    getLoggedUser() {
        interface TokenDto {
            nameid: string
        }
        const decoded = jwt_decode(localStorage.getItem('jwt')!) as TokenDto;
    
        return decoded.nameid;
    }
}