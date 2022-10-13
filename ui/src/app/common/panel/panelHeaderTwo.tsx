import React from 'react'
import { Grid } from 'semantic-ui-react'

interface Props {
    first: string,
    second: string
}

export default function PanelHeaderTwo({first,second}: Props) {
    return (
        <Grid className="ui stackable two column grid" style={{ textAlign: 'center' }}>
            <Grid.Column width={8} className='bg-lightgrey'>
                <Grid>
                    <Grid.Column className='column' width={8}>
                        {first}
                    </Grid.Column>
                    <Grid.Column width={8} className='bg-lightgrey'>
                        {second}
                    </Grid.Column>
                </Grid>
            </Grid.Column>
            <Grid.Column width={8} className='bg-lightgrey column'>
            </Grid.Column>
        </Grid>
    )
}
