import React from 'react'
import { format, parseISO } from 'date-fns';
import { Header, Segment } from 'semantic-ui-react';

interface Props {
  matchDate: Date
}

export default function MatchDetailsHeader({ matchDate }: Props) {

  return (
    <Segment textAlign='center' color='blue' >
      <Header as='h1' content={matchDate instanceof Date ?
        <>
          {format(matchDate, 'dd-MM-yyyy: HH:mm')}
        </>
        :
        <>
          {format(parseISO(matchDate), 'dd-MM-yyyy: HH:mm')}
        </>}
      />
    </Segment>
  )
}
