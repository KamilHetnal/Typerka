import React from 'react'
import { Grid, Header, Image} from 'semantic-ui-react'
import { Championship } from '../../../app/models/Championship'

interface Props {
    champ: Championship
}

export default function ChampionshipDetailsHeader({ champ }: Props) {

    return (
        <Grid columns={2}>
            <Grid.Column width={4}>
                <Image size='small' src={`/assets/logo.png`} />
            </Grid.Column>
            <Grid.Column width={12}>
                <Grid.Row>
                <Header size='large'>{champ.title}</Header>
                <Header size='medium'>{champ.country}</Header>
                </Grid.Row>
            </Grid.Column>
        </Grid>
    )
}
