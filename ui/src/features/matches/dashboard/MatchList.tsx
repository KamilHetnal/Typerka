import { observer } from 'mobx-react-lite'
import React from 'react'
import { Container } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store'
import MatchListitem from './MatchListitem'

export default observer(function MatchList() {
    const { matchStore } = useStore()
    const { matchesByDate } = matchStore

    return (
        <>
            {matchesByDate.map((match) => (
                <Container text key={match.id}>
                        <MatchListitem match={match} />
                </Container>
            ))}
        </>
    )
})
