import React from 'react'
import { Grid } from 'semantic-ui-react'

interface Props {
    first: string,
    second: string,
    third: string,
    fourth: string
}

export default function PanelHeaderFour({ first, second, third, fourth }: Props) {
    return (
        <Grid className="ui stackable four column grid" style={{ textAlign: 'center' }}>
            <Grid.Column className='column' width={4}>
                {first}
            </Grid.Column>
            <Grid.Column width={4} className='column'>
                {second}
            </Grid.Column>
            <Grid.Column className='column' width={4}>
                {third}
            </Grid.Column>
            <Grid.Column width={4} className='column'>
                {fourth}
            </Grid.Column>
        </Grid>
    )
}
