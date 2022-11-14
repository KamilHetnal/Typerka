import React from 'react'
import { Segment } from 'semantic-ui-react';
import { Match } from '../../../app/models/Match';
import MatchListitem from '../../matches/dashboard/MatchListitem';

interface Props {
  matches: Match[]
}

export default function TeamMatchesList({matches}: Props) {

  return (
    <Segment>
      {matches.map((match) => (
        <MatchListitem key={match.id} match={match} />
      ))}
    </Segment>
  )
}
