import React, { useEffect, useState } from 'react'
import { ChampionBetFormValues } from '../../../app/models/ChampionBet';
import { useStore } from '../../../app/stores/store';
import * as Yup from 'yup';
import { v4 as uuid } from 'uuid';
import { observer } from 'mobx-react-lite';
import { Form, Formik } from 'formik';
import { Button } from 'semantic-ui-react';
import MySelectInput from '../../../app/common/form/MySelectInput';
import LoadingComponent from '../../../app/layout/LoadingComponent';


export default observer(function ChampionBetForm() {
    const { championBetStore, teamStore, userStore: { user }, profileStore, modalStore: { closeModal } } = useStore();
    const { loadChampionBet, createChampionBet, updateChampionBet } = championBetStore;
    const { loadProfile, profile } = profileStore;
    const { loadTeams, teams, loadingInitial } = teamStore;

    useEffect(() => {
        loadProfile(user?.username!);
    }, [loadProfile, user])

    useEffect(() => {
        if (teams.length <= 1)
            loadTeams()
    }, [teams.length, loadTeams])


    const [bet, setBet] = useState<ChampionBetFormValues>(new ChampionBetFormValues());

    const validationSchema = Yup.object({
        championId: Yup.string().required('Wskazanie drużyny jest wymagane')
    })

    useEffect(() => {
        if (profile?.championBet) {
            loadChampionBet(profile?.championBet.id).then(bet => setBet(new ChampionBetFormValues(bet)))
        }
    }, [profile?.championBet, loadChampionBet]);

    function handleFormSubmit(bet: ChampionBetFormValues) {
        if (!bet.id) {
            let newBet = {
                ...bet,
                id: uuid(),
            };
            createChampionBet(newBet).then(() => closeModal())
        } else {
            updateChampionBet(bet).then(() => closeModal())
        }
    }

    if (loadingInitial) return <LoadingComponent content='Zbieram dane' />

    return (
        <div>
            <h1>Wybierz zwycięzcę</h1>
            <Formik
                validationSchema={validationSchema}
                enableReinitialize initialValues={bet}
                onSubmit={values => handleFormSubmit(values)}
            >
                {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                        {/* <Label content={match.homeTeam?.name} color='violet' basic style={{width: '100%'}}/> */}
                        <MySelectInput
                            placeholder="Drużyny"
                            name='championId'
                            options={teams.map(t => ({
                                "key": t.id,
                                "text": t.name,
                                "value": t.id
                            }
                            ))}
                        />
                        <Button
                            disabled={isSubmitting || !dirty || !isValid}
                            loading={isSubmitting} fluid positive type='submit'>Dodaj</Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
})
