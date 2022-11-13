import React from 'react'
import { Grid, Header, Image } from 'semantic-ui-react'
import { Team } from '../../../app/models/Team'

interface Props {
    team: Team
}

export default function TeamInfo({ team }: Props) {
    return (
        <Grid columns={2}>
            <Grid.Column width={4}>
                <Image size='small' src={`/assets/flags/${team.name.toLocaleLowerCase()}.png`} />
            </Grid.Column>
            <Grid.Column width={12} verticalAlign='middle'>
                <Header size='medium' content={team.name} />
            </Grid.Column>
        </Grid>
    )
}
