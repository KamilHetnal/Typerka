import { createContext, useContext } from "react";
import CommonStore from "./commonStore";
import MatchStore from "./matchStore";
import ModalStore from "./modalStore";
import TeamStore from "./teamStore";
import UserStore from "./userStore";

interface Store {
    commonStore: CommonStore
    teamStore: TeamStore
    matchStore: MatchStore
    modalStore: ModalStore
    userStore: UserStore
}

export const store: Store = {
    commonStore: new CommonStore(),
    teamStore: new TeamStore(),
    matchStore: new MatchStore(),
    modalStore: new ModalStore(),
    userStore: new UserStore(),
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}