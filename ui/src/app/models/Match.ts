import { Team } from "./Team"

export interface Match {
    id: string
    homeTeam: Team
    awayTeam: Team
    matchDate: string
    homeGoals: number
    awayGoals: number
  }