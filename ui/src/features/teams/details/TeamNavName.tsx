import React from 'react'
import { NavLink } from 'react-router-dom'
import { Grid, Image } from 'semantic-ui-react'
import { Team } from '../../../app/models/Team'

interface Props {
    team: Team
}

export default function TeamNavName({team}: Props) {
  return (
    <Grid stretched verticalAlign='middle'>
    <Grid.Row centered>
        <Grid.Column width={4} >
            <Image size='mini' src={team ? `/assets/flags/${team?.name?.toLocaleLowerCase()}.png` : '/assets/logo.png'} />
        </Grid.Column>
        <Grid.Column width={12}>
            <NavLink to={`/teams/${team?.id}`} >{team?.name}</NavLink>
        </Grid.Column>
    </Grid.Row>
</Grid>
  )
}
