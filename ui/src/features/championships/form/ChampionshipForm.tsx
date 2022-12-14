import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { useStore } from '../../../app/stores/store';
import * as Yup from 'yup';
import { ChampionshipFormValue } from '../../../app/models/Championship';
import { Form, Formik } from 'formik';
import MySelectInput from '../../../app/common/form/MySelectInput';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

interface Props {
    id: string
}

export default observer(function ChampionshipForm({ id }: Props) {
    const { championshipStore, teamStore, modalStore, playerStore } = useStore();

    const { loadChampionship, updateChampionship } = championshipStore;
    const { loadTeams, teams } = teamStore;
    const { loadPlayers, players } = playerStore;
    const { closeModal } = modalStore;

    useEffect(() => {
        if (teams.length <= 1)
            loadTeams()
    }, [teams.length, loadTeams])

    useEffect(() => {
        if (players.length <= 1)
            loadPlayers()
    }, [players, loadPlayers])

    const topPlayers = players.sort((a, b) => b.goals - a.goals).filter(p => p.goals !== 0)

    const [champ, setChamp] = useState<ChampionshipFormValue>(new ChampionshipFormValue());

    const validationSchema = Yup.object({
        winnerId: Yup.string().required('Podanie daty jest wymagane')
    })

    useEffect(() => {
        if (id)
            loadChampionship(id).then(champ => setChamp(new ChampionshipFormValue(champ)))
    }, [id, loadChampionship]);

    function handleFormSubmit(champ: ChampionshipFormValue) {
        updateChampionship(champ).then(() => closeModal())
    }
    return (
        <div>
            <h1>Te detale...</h1>
            <Formik
                validationSchema={validationSchema}
                enableReinitialize initialValues={champ}
                onSubmit={values => handleFormSubmit(values)}
            >
                {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                        <MySelectInput
                            placeholder="Dru??yny"
                            name='winnerId'
                            options={teams.map(t => ({
                                "key": t.id,
                                "text": t.name,
                                "value": t.id
                            }
                            ))}
                        />
                        <MySelectInput
                            placeholder="Pi??karze"
                            name='topScorerId'
                            options={topPlayers.map(p => ({
                                "key": p.id,
                                "text": p.name,
                                "value": p.id
                            }
                            ))}
                        />
                        <Button
                            disabled={isSubmitting || !dirty || !isValid}
                            loading={isSubmitting} floated='right' positive type='submit'>Dodaj</Button>
                        <Link to='/matches'>
                            <Button secondary type='button'>Anuluj</Button>
                        </Link>
                    </Form>
                )}
            </Formik>
        </div>
    )
})

