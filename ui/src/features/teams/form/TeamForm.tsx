import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { TeamFormValues } from '../../../app/models/Team';
import { useStore } from '../../../app/stores/store';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import MyTextInput from '../../../app/common/form/myTextInput';
import MyNumberInput from '../../../app/common/form/MyNumberInput';
import { Button } from 'semantic-ui-react';

interface Props {
  id: string
}

export default observer(function TeamForm({id}: Props) {

  const { teamStore, modalStore: {closeModal}} = useStore();
  const { loadTeam, updateTeam } = teamStore

  const [team, setTeam] = useState<TeamFormValues>(new TeamFormValues());

  const validationSchema = Yup.object({
      name: Yup.string().required('Podanie daty jest wymagane'),
      group: Yup.string().required('Podanie daty jest wymagane')
  })

  useEffect(() => {
      if (id)
          loadTeam(id).then(team => setTeam(new TeamFormValues(team)))
  }, [id, loadTeam]);

  function handleFormSubmit(team: TeamFormValues) {
    updateTeam(team).then(() => closeModal())
  }

  return (
    <div>
    <h1>Te detale...</h1>
    <Formik
      validationSchema={validationSchema}
      enableReinitialize initialValues={team}
      onSubmit={values => handleFormSubmit(values)}
    >
      {({ handleSubmit, isValid, isSubmitting, dirty }) => (
        <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
          <MyTextInput placeholder='Nazwa' name='name' label='Nazwa'/>
          <MyTextInput placeholder='Grupa' name='group' label= 'Grupa'/>
          <MyNumberInput label='Rozegrane mecze' placeholder='Rozegrane mecze' name='matchesPlayed' />
          <MyNumberInput label='Wygrane' placeholder='Wygrane' name='wins' />
          <MyNumberInput label='Przegrane' placeholder='Przegrane' name='losses' />
          <MyNumberInput label='Zremisowane' placeholder='Zremisowane' name='draws' />
          <MyNumberInput label='Zdobyte gole' placeholder='Zdobyte gole' name='goalsScored' />
          <MyNumberInput label='Stracone gole' placeholder='Stracone gole' name='goalsConceded' />
          <MyNumberInput label='Punkty' placeholder='Punkty' name='points' />
          <Button
            disabled={isSubmitting || !dirty || !isValid}
            loading={isSubmitting} floated='right' positive type='submit'>Edytuj</Button>
        </Form>
      )}
    </Formik>
  </div>
  )
})
