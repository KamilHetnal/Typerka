import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { MatchFormValues } from '../../../app/models/Match';
import { useStore } from '../../../app/stores/store';
import * as Yup from 'yup';
import { v4 as uuid } from 'uuid';
import { Formik, Form } from "formik";
import { Button} from 'semantic-ui-react';
import MyDateInput from '../../../app/common/form/MyDateInput';
import MySelectInput from '../../../app/common/form/MySelectInput';
import MyNumberInput from '../../../app/common/form/MyNumberInput';


interface Props {
  id?: string
}

export default observer(function MatchForm({ id }: Props) {
  const history = useHistory();

  const { matchStore,teamStore } = useStore();

  const { loadMatch, createMatch, updateMatch } = matchStore;
  const { loadTeamsArray, teams} = teamStore;
  
  useEffect(() => {
    loadTeamsArray()
  }, [teamStore, loadTeamsArray])


  const [match, setMatch] = useState<MatchFormValues>(new MatchFormValues());

  const validationSchema = Yup.object({
    matchDate: Yup.string().required('Podanie daty jest wymagane')
  })

  useEffect(() => {
    if (id) loadMatch(id).then(match => setMatch(new MatchFormValues(match)))
  }, [id, loadMatch]);

  function handleFormSubmit(match: MatchFormValues) {
    if (!match.id) {
      let newMatch = {
        ...match,
        id: uuid(),
      };
      createMatch(newMatch).then(() => history.push(`/matches/${newMatch.id}`))
    } else {
      updateMatch(match).then(() => history.push(`/matches/${match.id}`))
    }
  }
  return (
    <div>
      <h1>Te detale...</h1>
      <Formik
        validationSchema={validationSchema}
        enableReinitialize initialValues={match}
        onSubmit={values => handleFormSubmit(values)}
      >
        {({ handleSubmit, isValid, isSubmitting, dirty }) => (
          <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
            <MyDateInput 
                placeholderText='Data meczu'
                name='matchDate'
                showTimeSelect
                timeFormat='p'
                timeCaption='Początek'
                dateFormat='dd-mm-yyyy H:mm'
            />
            <MyNumberInput placeholder='Gole Gospodarza' name='homeGoals' />
            <MyNumberInput placeholder='Gole Gościa' name='awayGoals' />
            <MySelectInput 
              placeholder="Gospodarz" 
              name='homeTeam'
              options={teams.map(t => ({  
                "key": t.id,
                "text": t.name,
                "value": t}
              ))}
            />
            <MySelectInput 
              placeholder="Gość" 
              name='awayTeam'
              options={teams.map(t => ({  
                "key": t.id,
                "text": t.name,
                "value": t}
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
