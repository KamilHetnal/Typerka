import { observer } from 'mobx-react-lite'
import React from 'react'
import { Tab } from 'semantic-ui-react'
import { Match } from '../../../app/models/Match'
import MatchListitem from './MatchListitem'


interface IProps {
    setActiveTab: (activeIndex: any) => void;
    matches: [string, Match[]][];
}

const MatchList: React.FC<IProps> = ({ setActiveTab, matches }) => {
    
    const panes = matches.map(([group, matches]) => (
        {
            menuItem: `${group}`, render: () => <Tab.Pane active>
                {matches.map((match) => (
                    <MatchListitem key={match.id} match={match} />
                ))}</Tab.Pane>
        }
    ))
    return (
        <Tab
            menu={{ fluid: false, vertical: true }}
            menuPosition='left'
            panes={panes}
            onTabChange={(e, data) => setActiveTab(data.activeIndex)}
        >
        </Tab>
    )
}

export default MatchList;
