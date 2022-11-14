import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { useStore } from '../../../app/stores/store';
import { v4 as uuid } from 'uuid';
import { Formik, Form } from "formik";
import { BetFormValues } from '../../../app/models/Bet';
import MyNumberInput from '../../../app/common/form/MyNumberInput';
import { Button, Label } from 'semantic-ui-react';
import { Match } from '../../../app/models/Match';
import * as Yup from 'yup';
import MatchListitem from '../dashboard/MatchListitem';
import { useHistory } from 'react-router-dom';

interface Props {
  matchBetId?: string
  matchId: string
}

export default observer(function BetForm({ matchBetId, matchId }: Props) {
  const history = useHistory();
  const { betStore, modalStore, matchStore } = useStore();

  const { loadBet, createBet, updateBet } = betStore;
  const { loadMatch , setLoadingInitial } = matchStore;

  const [bet, setBet] = useState<BetFormValues>(new BetFormValues());
  const [match, setMatch] = useState<Match>(new Match());

  useEffect(() => {
    if (matchBetId) loadBet(matchBetId).then(bet => setBet(new BetFormValues(bet)))
  }, [matchBetId, loadBet]);

  useEffect(() => {
    if (matchId) loadMatch(matchId).then(match => setMatch(new Match(match)))
  }, [matchId, loadMatch]);

  const validationSchema = Yup.object({
    homeScore: Yup.number().moreThan(-1, "Nie mozna obstawić negatywnego wyniku o_0"),
    awayScore: Yup.number().moreThan(-1, "Nie mozna obstawić negatywnego wyniku o_0")
  })

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
      createBet(newBet).then(() => modalStore.closeModal())
    } else {
      let edditedBet = {
        ...bet,
        match: {
          id: match.id
        },
      }
      updateBet(edditedBet).then(() => modalStore.closeModal())
    }
  }
  return (
    <div>
      <h1>Te detale...</h1>
      <Formik
        validationSchema={validationSchema}
        enableReinitialize initialValues={bet}
        onSubmit={values => handleFormSubmit(values)}
      >
        {({ handleSubmit, isValid, isSubmitting }) => (
          <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
            <MyNumberInput placeholder='Gole Gospodarza' name='homeScore' label={match.homeTeam?.name} />
            <MyNumberInput placeholder='Gole Gościa' name='awayScore' label={match.awayTeam?.name} />
            <Button
              disabled={isSubmitting || !isValid}
              loading={isSubmitting} floated='right' positive type='submit'>Dodaj</Button>
            <Button onClick={modalStore.closeModal} secondary type='button'>Anuluj</Button>
          </Form>
        )}
      </Formik>
    </div>
  )
})
