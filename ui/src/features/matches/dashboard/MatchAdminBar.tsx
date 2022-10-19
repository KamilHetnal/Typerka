import { observer } from 'mobx-react-lite';
import React from 'react'
import { Button } from 'semantic-ui-react';
import { Match } from '../../../app/models/Match';
import { useStore } from '../../../app/stores/store';
import MatchForm from '../form/MatchForm';

interface Props {
    match: Match
}

export default observer(function MatchAdminBar({match}: Props) {
    const { userStore: { getRoles },modalStore, matchStore: {deleteMatch} } = useStore();

    const decodedRole = getRoles();
    if (decodedRole?.includes("admin") ) {

        return (
            <Button.Group>
                <Button  primary onClick={() => modalStore.openModal(<MatchForm id={match.id} />)} content='Edytuj'/>
                        <Button color='red' onClick={() => deleteMatch(match.id)} content='Usuń'/>
            </Button.Group>
            )
        }
        return <></>
})