import React from 'react'
import { Grid, Header, Segment } from 'semantic-ui-react'
import RoleDashboard from '../../roles/dashboard/RoleDashboard'
import ProfileList from './ProfileList'

export default function ProfileDashboard() {

  return (
    <Segment>
      <Header as={'h1'}>Panel Użytkowników</Header>
      <Grid>
        <Grid.Column width={12}>
          <ProfileList />
        </Grid.Column>
        <Grid.Column width={4}>
          <RoleDashboard />
        </Grid.Column>
      </Grid>
    </Segment>
  )
}
