import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { useStore } from '../../../app/stores/store';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import MySelectInput from '../../../app/common/form/MySelectInput';
import { Button } from 'semantic-ui-react';
import { TeamDto } from '../../../app/models/Team';
import TopScorerBetForm from './TopScorerBetForm';
import LoadingComponent from '../../../app/layout/LoadingComponent';

export default observer(function FilterTeamForm() {
    const { teamStore, modalStore: { openModal } } = useStore();
    const { loadTeams, teams, loadingInitial } = teamStore;

    useEffect(() => {
        if (teams.length <= 1)
            loadTeams()
    }, [teams.length, loadTeams])

    const validationSchema = Yup.object({
        id: Yup.string().required('Wskazanie drużyny jest wymagane')
    })

    function handleFormSubmit(team: TeamDto) {
        openModal(<TopScorerBetForm teamId={team.id!} />)
    }
    if (loadingInitial) return <LoadingComponent content='Zbieram dane' />
    return (
        <div>
            <h1>Wybierz drużynę</h1>
            <Formik
                validationSchema={validationSchema}
                enableReinitialize initialValues={{}}
                onSubmit={values => handleFormSubmit(values)}
            >
                {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                        {/* <Label content={match.homeTeam?.name} color='violet' basic style={{width: '100%'}}/> */}
                        <MySelectInput
                            placeholder="Drużyny"
                            name='id'
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
