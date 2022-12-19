import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { Segment } from 'semantic-ui-react'
import { Player } from '../../../app/models/Player'
import { useStore } from '../../../app/stores/store'

interface Props {
  betTopScorerId: string
}

export default observer(function TopScorerBetDetails({ betTopScorerId }: Props) {
  const { playerStore: { loadPlayer } } = useStore();
  const [player, setPlayer] = useState<Player>({
      id: '',
      teamId: '',
      name: '',
      position: '',
      goals: 0,
  })

  useEffect(() => {
      if (betTopScorerId)
          loadPlayer(betTopScorerId).then(player => setPlayer(player!))
  }, [betTopScorerId, loadPlayer])

  return (
    <Segment textAlign='center'>
      <b>
        {player?.name}
      </b>
    </Segment>
  )
})
