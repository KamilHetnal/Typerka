import React, { useEffect, useState } from 'react'
import { PlayerFormValues } from '../../../app/models/Player';
import { useStore } from '../../../app/stores/store';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import MyTextInput from '../../../app/common/form/myTextInput';
import MyNumberInput from '../../../app/common/form/MyNumberInput';
import { Button } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';

interface Props {
    id: string
}

export default observer(function PlayerForm({ id }: Props) {
    const { playerStore, modalStore: { closeModal } } = useStore();
    const { loadPlayer, updatePlayer } = playerStore

    const [player, setPlayer] = useState<PlayerFormValues>(new PlayerFormValues());

    const validationSchema = Yup.object({
        name: Yup.string().required('Podanie daty jest wymagane'),
        position: Yup.string().required('Podanie daty jest wymagane')
    })

    useEffect(() => {
        if (id)
            loadPlayer(id).then(player => setPlayer(new PlayerFormValues(player)))
    }, [id, loadPlayer]);

    function handleFormSubmit(player: PlayerFormValues) {
        updatePlayer(player).then(() => closeModal())
    }

    return (
        <div>
            <h1>Te detale...</h1>
            <Formik
                validationSchema={validationSchema}
                enableReinitialize initialValues={player}
                onSubmit={values => handleFormSubmit(values)}
            >
                {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                        <MyTextInput placeholder='Imię' name={'name'} label='Imię' />
                        <MyTextInput placeholder='Pozycja' name={'position'} label='Pozycja' />
                        <MyNumberInput label='Zdobyte gole' placeholder='Zdobyte gole' name='goals' />
                        <Button
                            disabled={isSubmitting || !dirty || !isValid}
                            loading={isSubmitting} floated='right' positive type='submit'>Edytuj</Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
})
