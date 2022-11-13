import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { TopScorerBetFormValues } from '../../../app/models/TopScorerBet';
import { useStore } from '../../../app/stores/store';
import * as Yup from 'yup';
import { v4 as uuid } from 'uuid';
import { Form, Formik } from 'formik';
import MySelectInput from '../../../app/common/form/MySelectInput';
import { Button } from 'semantic-ui-react';

interface Props {
  teamId: string
}

export default observer(function TopScorerBetForm({teamId}: Props) {
  const { topScorerStore, userStore: { user }, profileStore, modalStore: { closeModal }, playerStore } = useStore();
  const { loadTopScorerBet, createTopScorerBet, updateTopScorerBet } = topScorerStore;
  const { loadProfile, profile } = profileStore;
  const { loadPlayersInTeam, playersOnPosition } = playerStore

  useEffect(() => {
    loadProfile(user?.username!);
  }, [loadProfile, user])

  useEffect(() => {
    loadPlayersInTeam(teamId)
  }, [teamId, loadPlayersInTeam])


  const [bet, setBet] = useState<TopScorerBetFormValues>(new TopScorerBetFormValues());

  const validationSchema = Yup.object({
    topScorerId: Yup.string().required('Wskazanie zawodnika jest wymagane')
  })

  useEffect(() => {
    if (profile?.topScorerBet) {
      loadTopScorerBet(profile?.topScorerBet.id).then(bet => setBet(new TopScorerBetFormValues(bet)))
    }
  }, [profile?.topScorerBet, loadTopScorerBet]);

  function handleFormSubmit(bet: TopScorerBetFormValues) {
    if (!bet.id) {
      let newBet = {
        ...bet,
        id: uuid(),
      };
      createTopScorerBet(newBet).then(() => closeModal())
    } else {
      updateTopScorerBet(bet).then(() => closeModal())
    }
  }
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
              placeholder="Piłkarze"
              name='topScorerId'
              options={playersOnPosition.map(p => ({
                "key": p.id,
                "text": p.name,
                "value": p.id
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
