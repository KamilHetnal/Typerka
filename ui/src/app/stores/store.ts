import { createContext, useContext } from "react";
import CommonStore from "./commonStore";
import MatchStore from "./matchStore";
import TeamStore from "./teamStore";

interface Store {
    commonStore: CommonStore
    teamStore: TeamStore
    matchStore: MatchStore
}

export const store: Store = {
    commonStore: new CommonStore(),
    teamStore: new TeamStore(),
    matchStore: new MatchStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}