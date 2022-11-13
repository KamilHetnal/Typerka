import { observer } from 'mobx-react-lite'
import React from 'react'
import { Tab } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store'
import MatchListitem from './MatchListitem'

export default observer(function MatchList() {
    const { matchStore } = useStore()
    const { groupedMatches } = matchStore

    const panes = groupedMatches.map(([group, matches]) => (
        {
            menuItem: `${group}`, render: () => <Tab.Pane>
                {matches.map((match) => (
                    <MatchListitem key={match.id} match={match} />
                ))}</Tab.Pane>
        }
    ))

    return (
        <>
            <Tab
                menu={{ fluid: false, vertical: true, }}
                menuPosition='left'
                panes={panes}
            />
        </>
    )
})
