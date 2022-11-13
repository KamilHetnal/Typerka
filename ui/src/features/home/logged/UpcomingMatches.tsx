import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import {  Segment } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store'
import UpcomingMatchesList from './UpcomingMatchesList';

export default observer(function UpcomingMatches() {
  const {matchStore} = useStore();
  const {loadMatches, loadingInitial} = matchStore;

  useEffect(() => {
    loadMatches()
  }, [loadMatches])

  
  if (loadingInitial) return <LoadingComponent content='Zbieram dane' />
  
  return (
    <Segment.Group>
      <UpcomingMatchesList />
    </Segment.Group>

  )
})
