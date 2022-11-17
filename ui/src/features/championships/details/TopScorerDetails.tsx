import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { Grid, Header } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';

interface Props {
    topScorerId?: string
}

export default observer(function TopScorerDetails({ topScorerId }: Props) {
    const { playerStore } = useStore();
    const { player, loadPlayer } = playerStore

    useEffect(() => {
        if (topScorerId) loadPlayer(topScorerId)
    }, [topScorerId, loadPlayer])
    return (
        <Grid>
            <Grid.Row >
                {topScorerId && player ?
                    <Grid columns={2}>
                        <Grid.Column width={8}>
                            <Header size='medium' content={player.name} />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Header size='medium' content={player.goals} />
                        </Grid.Column>
                    </Grid>
                    :
                    <>
                        <b>Króla strzelców poznamy 18 grudnia</b>
                    </>
                }
            </Grid.Row>
        </Grid>
    )
})
