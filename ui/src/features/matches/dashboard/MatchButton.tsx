import { observer } from 'mobx-react-lite';
import React from 'react'
import { Button } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import BetForm from '../form/BetForm';
import MatchForm from '../form/MatchForm';

interface Props {
    matchId: string,
    matchBetId?: string
}

export default observer(function MatchButton({ matchId, matchBetId }: Props) {
    const { userStore: { getRoles }, modalStore : {openModal}, matchStore: { deleteMatch } } = useStore();

    const decodedRole = getRoles();
    if (decodedRole?.includes("admin")) {

        return (
            <Button.Group>
                <Button primary onClick={() => openModal(<MatchForm id={matchId} />)} content='Edytuj' />
                <Button color='red' onClick={() => deleteMatch(matchId)} content='Usuń' />
            </Button.Group>
        )
    }
    return (
        <Button primary fluid content='Wytypuj wynik'
            onClick={() => openModal(
                <BetForm
                    matchId={matchId}
                    matchBetId={matchBetId}
                />)}
        />)
})