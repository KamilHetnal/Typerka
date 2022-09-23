import { createContext, useContext } from "react";
import TeamStore from "./teamStore";

interface Store {
    teamStore: TeamStore
}

export const store: Store = {
    teamStore: new TeamStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}