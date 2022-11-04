import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import {  Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store'
import UpcomingMatchesList from './UpcomingMatchesList';

export default observer(function UpcomingMatches() {
  const {matchStore} = useStore();
  const {loadMatches, matchRegistry} = matchStore;

  useEffect(() => {
    if (matchRegistry.size <= 0) loadMatches()
  }, [matchRegistry.size, loadMatches])
  return (
    <Segment.Group>
      <UpcomingMatchesList />
    </Segment.Group>

  )
})
