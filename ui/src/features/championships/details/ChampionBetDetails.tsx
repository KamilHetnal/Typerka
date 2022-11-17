import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { Segment } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store'

interface Props {
  betChampionId: string
}

export default observer(function ChampionBetDetails({ betChampionId }: Props) {
  const { teamStore } = useStore()
  const { loadTeam, team } = teamStore

  useEffect(() => {
    if (betChampionId)
      loadTeam(betChampionId)
  }, [betChampionId, loadTeam])

  return (
    <Segment textAlign='center'>
      <b>
        {team?.name}
      </b>
    </Segment>
  )
})
