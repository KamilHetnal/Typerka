import { Form, Formik } from 'formik'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { Button } from 'semantic-ui-react'
import MySelectInput from '../../../app/common/form/MySelectInput'
import { BetFormValues } from '../../../app/models/Bet'
import { Match } from '../../../app/models/Match'
import { useStore } from '../../../app/stores/store'

interface Props {
    bet: BetFormValues
    match: Match
}

export default observer(function BetWinnerForm({ bet, match }: Props) {
    const { betStore, modalStore } = useStore();
    const { updateBet } = betStore;
    console.log(bet);

    const winnerOptions = [
        { key: 'ht', value: match.homeTeam, text: match.homeTeam?.name },
        { key: 'at', value: match.awayTeam, text: match.awayTeam?.name }
    ]

    function handleFormSubmit(bet: BetFormValues) {
        updateBet(bet).then(() => modalStore.closeModal())
    }

    return (
        <div>
            <h1>{bet.id}</h1>
            <Formik
                enableReinitialize initialValues={bet}
                onSubmit={values => handleFormSubmit(values)}
            >
                {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                        <MySelectInput placeholder={'Wybierz zwyciezcę'} name={'winner'} options={winnerOptions} />
                        <Button
                            disabled={isSubmitting || !dirty || !isValid}
                            loading={isSubmitting} floated='right' positive type='submit'>Dodaj</Button>
                        <Button onClick={() => modalStore.closeModal} secondary type='button'>Anuluj</Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
})
