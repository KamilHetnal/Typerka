import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { Image, Header } from 'semantic-ui-react'
import LoadingComponent from '../../../app/layout/LoadingComponent'
import { Team } from '../../../app/models/Team'
import { useStore } from '../../../app/stores/store'

interface Props {
    winnerId?: string
}

export default observer(function ChampionDetails({ winnerId }: Props) {
    const { teamStore: { loadTeam, loadingInitial } } = useStore();
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
        loadTeam(winnerId!).then(team => setTeam(team!))
    }, [loadTeam, team, winnerId])

    return (
        <>
            {loadingInitial ? <LoadingComponent content='' /> :
                <>
                    {winnerId && team ?
                        <Header as='h3' textAlign='center' >
                            <Image size='tiny' centered src={`/assets/flags/${team.name.toLocaleLowerCase()}.png`} />
                            <Header.Content content={team.name} />
                        </Header>
                        :
                        <>
                            <b>Zwycięzcę turnieju poznamy 18 grudnia</b>
                        </>
                    }
                </>
            }
        </>
    )
})
