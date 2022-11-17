import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { Segment } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store'

interface Props {
  betTopScorerId: string
}

export default observer(function TopScorerBetDetails({ betTopScorerId }: Props) {
  const { playerStore } = useStore()
  const { loadPlayer, player } = playerStore

  useEffect(() => {
    if (betTopScorerId)
      loadPlayer(betTopScorerId)
  }, [betTopScorerId, loadPlayer])

  return (
    <Segment textAlign='center'>
      <b>
        {player?.name}
      </b>
    </Segment>
  )
})
