import { createContext, useContext } from "react";
import BetStore from "./betStore";
import ChampionBetStore from "./championBetStore";
import ChampionshipStore from "./championshipStore";
import CommonStore from "./commonStore";
import MatchStore from "./matchStore";
import ModalStore from "./modalStore";
import PlayerStore from "./playerStore";
import ProfileStore from "./profileStore";
import RoleStore from "./roleStore";
import TeamStore from "./teamStore";
import TopScorerBetStore from "./topScorerBetStore";
import UserStore from "./userStore";

interface Store {
    commonStore: CommonStore
    championshipStore: ChampionshipStore
    teamStore: TeamStore
    playerStore: PlayerStore
    matchStore: MatchStore
    modalStore: ModalStore
    userStore: UserStore
    profileStore: ProfileStore
    betStore: BetStore
    topScorerStore: TopScorerBetStore
    championBetStore: ChampionBetStore
    roleStore: RoleStore
}

export const store: Store = {
    commonStore: new CommonStore(),
    championshipStore: new ChampionshipStore(),
    teamStore: new TeamStore(),
    playerStore: new PlayerStore(),
    matchStore: new MatchStore(),
    modalStore: new ModalStore(),
    userStore: new UserStore(),
    profileStore: new ProfileStore(),
    betStore: new BetStore(),
    topScorerStore: new TopScorerBetStore(),
    championBetStore: new ChampionBetStore(),
    roleStore: new RoleStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}