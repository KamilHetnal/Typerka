import { observer } from 'mobx-react-lite'
import React from 'react'
import { Grid, Segment, Image } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store'
import { format } from 'date-fns'
import { NavLink } from 'react-router-dom'

export default observer(function UpcomingMatchesList() {
    const { matchStore } = useStore()
    const { matchesByDate } = matchStore

    const itemStyle = {
        borderTop: '0.2em solid #2185d0'
    }
    return (
        <>
            {matchesByDate.filter(m => m.matchDate >= new Date()).slice(0, 5).map((match) => (
                <Segment key={match.id}>
                    <Grid>
                        <Grid.Row columns={4} style={itemStyle}>
                            <Grid.Column width={5} as={NavLink} to={`/matches/${match.id}`}>
                                {format(match.matchDate, 'dd-M: H:mm')}
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Image size='mini' src={`/assets/flags/${match.homeTeam?.name?.toLocaleLowerCase()}.png`} />
                                {match.homeTeam?.name}
                            </Grid.Column>
                            <Grid.Column width={3} verticalAlign='middle'>
                                {match.homeGoals} : {match.awayGoals}
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Image size='mini' src={`/assets/flags/${match.awayTeam?.name?.toLocaleLowerCase()}.png`} />
                                {match.awayTeam?.name}
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            ))}
        </>
    )
})
