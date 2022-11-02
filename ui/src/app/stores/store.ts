import { createContext, useContext } from "react";
import BetStore from "./betStore";
import CommonStore from "./commonStore";
import MatchStore from "./matchStore";
import ModalStore from "./modalStore";
import ProfileStore from "./profileStore";
import RoleStore from "./roleStore";
import TeamStore from "./teamStore";
import UserStore from "./userStore";

interface Store {
    commonStore: CommonStore
    teamStore: TeamStore
    matchStore: MatchStore
    modalStore: ModalStore
    userStore: UserStore
    profileStore: ProfileStore
    betStore: BetStore
    roleStore: RoleStore
}

export const store: Store = {
    commonStore: new CommonStore(),
    teamStore: new TeamStore(),
    matchStore: new MatchStore(),
    modalStore: new ModalStore(),
    userStore: new UserStore(),
    profileStore: new ProfileStore(),
    betStore: new BetStore(),
    roleStore: new RoleStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}