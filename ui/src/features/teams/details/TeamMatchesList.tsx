import { observer } from 'mobx-react-lite';
import React from 'react'
import { Segment } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import MatchListitem from '../../matches/dashboard/MatchListitem';

export default observer(function TeamMatchesList() {
    const { matchStore } = useStore()
    const { matchesByDate,loadingInitial } = matchStore

    if (loadingInitial) return <LoadingComponent content='Zbieram dane' />

  return (
    <Segment>
        {matchesByDate.map((match) => (
            <MatchListitem key={match.id} match={match} />
        ))}
    </Segment>
  )
})
