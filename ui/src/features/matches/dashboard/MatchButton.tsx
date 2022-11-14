import { observer } from 'mobx-react-lite';
import React from 'react'
import { Button } from 'semantic-ui-react';
import { Match } from '../../../app/models/Match';
import { useStore } from '../../../app/stores/store';
import BetForm from '../form/BetForm';
import MatchForm from '../form/MatchForm';

interface Props {
    match: Match
}

export default observer(function MatchButton({ match }: Props) {
    const { userStore: { getRoles, getLoggedUser }, modalStore, matchStore: { deleteMatch } } = useStore();

    const decodedRole = getRoles();
    const decodedUserId = getLoggedUser();
    if (decodedRole?.includes("admin")) {

        return (
            <Button.Group>
                <Button primary onClick={() => modalStore.openModal(<MatchForm id={match.id} />)} content='Edytuj' />
                <Button color='red' onClick={() => deleteMatch(match.id)} content='Usuń' />
            </Button.Group>
        )
    }
    return (
        <Button primary content='Wytypuj wynik'
            onClick={() => modalStore.openModal(
                <BetForm
                    matchId={match.id}
                    matchBetId={match.matchBets.find(u => {
                        return u.appUserId === decodedUserId
                    })?.id}
                />)}
        />)
})