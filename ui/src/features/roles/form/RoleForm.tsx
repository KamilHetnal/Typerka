import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react'
import { RoleFormValues } from '../../../app/models/Role';
import { useStore } from '../../../app/stores/store';
import * as Yup from 'yup';
import { v4 as uuid } from 'uuid';
import { Formik, Form } from "formik";
import MyTextInput from '../../../app/common/form/myTextInput';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

interface Props {
    id?: string
  }

export default observer(function RoleForm({id}: Props) {
    const { roleStore, modalStore } = useStore();
    const { loadRole, createRole, updateRole } = roleStore;
    const [role, setRole] = useState<RoleFormValues>(new RoleFormValues());
    const validationSchema = Yup.object({
      name: Yup.string().required('Pole z nazwą jest wymagane')
    });
  
    useEffect(() => {
      if (id) 
        loadRole(id).then(role => setRole(new RoleFormValues(role)))
    }, [id, loadRole]);
  
    function handleFormSubmit(role: RoleFormValues) {
      if (!role.id) {
        let newRole = {
          ...role,
          id: uuid()
        };
        createRole(newRole).then(() => modalStore.closeModal())
      } else {
        updateRole(role).then(() => modalStore.closeModal())
      }
    }
  
    return (
      <div>
        <h1>Te detale...</h1>
        <Formik
          validationSchema={validationSchema}
          enableReinitialize initialValues={role}
          onSubmit={values => handleFormSubmit(values)}
        >
          {({ handleSubmit, isValid, isSubmitting, dirty }) => (
            <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
              <MyTextInput name='name' placeholder='nazwa' />
              <Button
                disabled={isSubmitting || !dirty || !isValid}
                loading={isSubmitting} floated='right' positive type='submit' content='Zatwierdź' />
              <Link to='/users'>
                <Button secondary type='button' content='Anuluj' 
                  onClick={() => modalStore.closeModal()}
                />
              </Link>
            </Form>
          )}
        </Formik>
      </div>
    )
  })
