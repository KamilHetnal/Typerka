import { createContext, useContext } from "react";
import MatchStore from "./matchStore";
import TeamStore from "./teamStore";

interface Store {
    teamStore: TeamStore
    matchStore: MatchStore
}

export const store: Store = {
    teamStore: new TeamStore(),
    matchStore: new MatchStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}