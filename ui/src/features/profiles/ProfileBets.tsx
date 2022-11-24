import { format } from 'date-fns';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react'
import { Grid, Header, Image, Segment } from 'semantic-ui-react';
import { Bet } from '../../app/models/Bet';
import { Match } from '../../app/models/Match';
import { Profile } from '../../app/models/Profile'
import { useStore } from '../../app/stores/store';

interface Props {
    profile: Profile
}

export default observer(function ProfileBets({ profile }: Props) {
    const { matchStore, teamStore, playerStore } = useStore()
    const { loadMatches, matches } = matchStore
    const { loadTeam, team } = teamStore
    const { loadPlayer, player } = playerStore
    const currentData = new Date();
    const startDate = new Date(2022, 10, 17, 17)
    const filtredMatches: [Match[], Bet[]] = [[], []]

    useEffect(() => {
        if (matches.length <= 0)
            loadMatches()
    }, [matches.length, loadMatches])
    profile.bets.forEach(bet => {
        matches.forEach(match => {
            match.matchBets.forEach(matchBet => {
                if (bet.id === matchBet.id) {
                    filtredMatches[0].push(match)
                    filtredMatches[1].push(matchBet)
                }
            })
        })
    });
    useEffect(() => {
        if (profile.championBet?.id)
            loadTeam(profile.championBet.championId)
    }, [profile.championBet?.championId, profile.championBet?.id, loadTeam])

    useEffect(() => {
        if (profile.topScorerBet?.id)
            loadPlayer(profile.topScorerBet.topScorerId)
    }, [profile.topScorerBet?.topScorerId, profile.topScorerBet?.id, loadPlayer])

    return (
        <div>
            {currentData >= startDate ?
                <Segment.Group>
                    <Header as='h3' content='Wytpowany zwycięzca' />
                    <Segment>
                        {team?.name}
                    </Segment>
                    <Header as='h3' content='Wytypowany król strzelców' />
                    <Segment>
                        {player?.name}
                    </Segment>
                    <Header as='h3' constent='Obstawienia meczy' />
                    <Segment>
                        {filtredMatches[0]
                        .sort((a,b) => a.matchDate.getTime() - b.matchDate.getTime())
                        .map((match, index) => (
                            <div key={match.id}>
                                {currentData >= match.matchDate ?
                                    <Segment >
                                        <Grid columns={5}>
                                            <Grid.Row>
                                                <Grid.Column width={4}>{format(match.matchDate, 'dd-MM: H:mm')}</Grid.Column>
                                                <Grid.Column width={4} >
                                                    <Image floated='right' src={`/assets/flags/${match.homeTeam.name.toLowerCase()}.png`} size='mini' />
                                                </Grid.Column>
                                                <Grid.Column width={2} textAlign='center'>
                                                    {filtredMatches[1][index].homeScore} : {filtredMatches[1][index].awayScore}
                                                </Grid.Column>
                                                <Grid.Column width={4}>
                                                    <Image src={`/assets/flags/${match.awayTeam.name.toLowerCase()}.png`} size='mini' />
                                                </Grid.Column>
                                                <Grid.Column width={2}>{filtredMatches[1][index].betPoints}</Grid.Column>
                                            </Grid.Row>
                                        </Grid>
                                    </Segment>
                                    :
                                    <></>}
                            </div>
                        ))}
                    </Segment>
                </Segment.Group>
                :
                <Segment>
                    Obstawienia zaczną się pojawiać po rozpoczęciu turnieju
                </Segment>
            }
        </div>
    )
})
