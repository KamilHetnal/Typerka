import { observer } from 'mobx-react-lite'
import React from 'react'
import { Match } from '../../../app/models/Match'
import { format } from 'date-fns';
import { Segment } from 'semantic-ui-react';

interface Props {
    match: Match
}

export default observer(function MatchDetailsHeader({match}: Props) {
  return (
    <Segment textAlign='center' color='teal' style={{fontSize: '20px'}}>
        {format(match.matchDate!, 'dd-MM-yyyy: H:mm')}
    </Segment>
  )
})
