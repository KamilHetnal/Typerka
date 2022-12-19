import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { Segment } from 'semantic-ui-react'
import { Team } from '../../../app/models/Team'
import { useStore } from '../../../app/stores/store'

interface Props {
  betChampionId: string
}

export default observer(function ChampionBetDetails({ betChampionId }: Props) {
  const { teamStore: { loadTeam } } = useStore();
  const [team, setTeam] = useState<Team>(
    {
      id: '', name: '', group: '',
      info: '', bestResult: '', bestResultDates: '',
      matchesPlayed: 0, wins: 0, draws: 0, losses: 0,
      goalsScored: 0, goalsConceded: 0, points: 0,
      players: []
    }
  )

  useEffect(() => {
    if (betChampionId)
      loadTeam(betChampionId).then(json => setTeam(json!))
  }, [betChampionId, team, loadTeam])

  return (
    <Segment textAlign='center'>
      <b>
        {team?.name}
      </b>
    </Segment>
  )
})
