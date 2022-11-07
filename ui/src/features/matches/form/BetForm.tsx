import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useStore } from '../../../app/stores/store';
import * as Yup from 'yup';
import { v4 as uuid } from 'uuid';
import { Formik, Form } from "formik";
import { BetFormValues } from '../../../app/models/Bet';
import MyNumberInput from '../../../app/common/form/MyNumberInput';
import { Button } from 'semantic-ui-react';
import { Match } from '../../../app/models/Match';
import BetWinnerForm from './BetWinnerForm';

interface Props {
  matchBetId?: string
  matchId: string
  appUserId?: string
}

export default observer(function BetForm({ matchBetId, matchId }: Props) {

  const { betStore, modalStore, matchStore } = useStore();

  const { loadBet, createBet, updateBet } = betStore;
  const { loadMatch } = matchStore;

  // useEffect(() => {
  //   loadTeamsArray()
  // }, [teamStore, loadTeamsArray])


  const [bet, setBet] = useState<BetFormValues>(new BetFormValues());
  const [match, setMatch] = useState<Match>(new Match());

  const validationSchema = Yup.object({
  })


  useEffect(() => {
    if (matchBetId) loadBet(matchBetId).then(bet => setBet(new BetFormValues(bet)))
  }, [matchBetId, loadBet]);

  useEffect(() => {
    if (matchId) loadMatch(matchId).then(match => setMatch(new Match(match)))
  }, [matchId, loadMatch]);




  function handleFormSubmit(bet: BetFormValues) {

    if (!bet.id) {
      let newBet = {
        id: uuid(),
        match: {
          id: match.id
        },
        homeScore: bet.homeScore,
        awayScore: bet.awayScore
      };
      createBet(newBet).then(() => {
        if (newBet.homeScore == newBet.awayScore) {
          modalStore.openModal(<BetWinnerForm bet={newBet} match={match} />)
        } else {
          modalStore.closeModal()
        }
      })
    } else {
      updateBet(bet).then(() => {
        if (bet.homeScore == bet.awayScore) {
          modalStore.openModal(<BetWinnerForm bet={bet} match={match} />)
        } else {
          modalStore.closeModal()
        }
      })
    }
  }
  return (
    <div>
      <h1>Te detale...</h1>
      <Formik
        enableReinitialize initialValues={bet}
        onSubmit={values => handleFormSubmit(values)}
      >
        {({ handleSubmit, isValid, isSubmitting, dirty }) => (
          <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
            <MyNumberInput placeholder='Gole Gospodarza' name='homeScore' />
            <MyNumberInput placeholder='Gole Gościa' name='awayScore' />
            <Button
              disabled={isSubmitting || !dirty || !isValid}
              loading={isSubmitting} floated='right' positive type='submit'>Dodaj</Button>
            <Button onClick={modalStore.closeModal} secondary type='button'>Anuluj</Button>
          </Form>
        )}
      </Formik>
    </div>
  )
})
