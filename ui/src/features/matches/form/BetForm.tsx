import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useStore } from '../../../app/stores/store';
import * as Yup from 'yup';
import { v4 as uuid } from 'uuid';
import { Formik, Form } from "formik";
import { Bet, BetFormValues } from '../../../app/models/Bet';
import MyNumberInput from '../../../app/common/form/MyNumberInput';
import { Button, Container } from 'semantic-ui-react';
import MySelectInput from '../../../app/common/form/MySelectInput';
import { Match, MatchDto } from '../../../app/models/Match';

interface Props {
    matchBetId?: string
    matchId: string
    appUserId?: string
}

export default observer(function BetForm({matchBetId, matchId, appUserId}: Props) {

    const { betStore,teamStore, matchStore } = useStore();
  
    const { loadBet, createBet, updateBet } = betStore;
    const { loadMatch } = matchStore;
    // const { loadTeamsArray, teams} = teamStore;
    
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
        createBet(newBet)
      } else {
        updateBet(bet)
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
              <Link to='/matches'>
                <Button secondary type='button'>Anuluj</Button>
              </Link>
            </Form>
          )}
        </Formik>
      </div>
    )
  })
