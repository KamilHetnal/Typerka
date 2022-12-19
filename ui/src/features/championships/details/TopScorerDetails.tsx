import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { Header } from 'semantic-ui-react';
import { Player } from '../../../app/models/Player';
import { useStore } from '../../../app/stores/store';

interface Props {
    topScorerId?: string
}

export default observer(function TopScorerDetails({ topScorerId }: Props) {
    const { playerStore: { loadPlayer } } = useStore();
    const [player, setPlayer] = useState<Player>({
        id: '',
        teamId: '',
        name: '',
        position: '',
        goals: 0,
    })

    useEffect(() => {
        if (topScorerId)
            loadPlayer(topScorerId).then(player => setPlayer(player!))
    }, [topScorerId, loadPlayer])
    return (
        <>
            {topScorerId && player ?
                <Header as='h3' textAlign='center'>
                    <Header.Content style={{marginRight: '10%'}} content={player.name} />
                    <Header.Content  content={player.goals} />
                </Header>
                :
                <>
                    <b>Króla strzelców poznamy 18 grudnia</b>
                </>
            }
        </>
    )
})
