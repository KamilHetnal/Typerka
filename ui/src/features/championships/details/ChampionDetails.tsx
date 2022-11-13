import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { Grid } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store'
import TeamInfo from '../../teams/details/TeamInfo'

interface Props {
    winnerId: string
}

export default observer(function ChampionDetails({ winnerId }: Props) {
    const { teamStore } = useStore();
    const { team, loadTeam } = teamStore

    useEffect(() => {
        if (winnerId) loadTeam(winnerId)
    }, [winnerId, loadTeam])

    return (
        <Grid>
            <Grid.Row >
                {team ?
                    <>
                        <TeamInfo team={team} />
                    </>
                    :
                    <>
                        <b>Zwycięzcę turnieju poznamy 18 grudnia</b>
                    </>
                }
            </Grid.Row>
        </Grid>
    )
})
