import { ErrorMessage, Form, Formik } from "formik";
import { observer } from "mobx-react-lite";
import React from "react";
import { Button, Header } from "semantic-ui-react";
import MyTextInput from "../../app/common/form/myTextInput";
import { useStore } from "../../app/stores/store";
import * as Yup from 'yup'
import ValidationErrors from "../errors/ValidationErrors";

export default observer(function RegisterForm() {
    const {userStore}= useStore();

    return(
        <Formik
            initialValues={{displayName: '', username: '',email: '', password: '', error: null}}
            onSubmit={(values, {setErrors}) => userStore.register(values)
                .catch(error => setErrors({error}))}
            validationSchema={Yup.object({
                displayName: Yup.string().required(),
                username: Yup.string().required(),
                email: Yup.string().required().email(),
                password: Yup.string().required(),
                registerPassword: Yup.string().required(),
                phoneNumber: Yup.string()
            })}
        >
            {({handleSubmit, isSubmitting, errors, isValid, dirty}) => (
                <Form className='ui form error' onSubmit={handleSubmit} autoComplete='off'>
                    <Header as='h2' content='Rejestracja' color='teal' textAlign='center'/>
                    <MyTextInput name='displayName' placeholder='Imię i nazwisko'/>
                    <MyTextInput name='username' placeholder='login'/>
                    <MyTextInput name='email' placeholder='Email'/>
                    <MyTextInput name='phoneNumber' placeholder='Numer Telefonu' type='tel'/>
                    <MyTextInput name='password' placeholder='Hasło' type='password'/>
                    <MyTextInput name='registerPassword' placeholder='Hasło Rejestracyjne' type='password'/>
                    <ErrorMessage name="error" render={() => 
                        <ValidationErrors errors={errors.error}/>}/>
                    <Button disabled={!isValid || !dirty || isSubmitting}
                        loading={isSubmitting} positive content='Wyślij' type='submit' fluid />                  
                </Form>
            )}
        </Formik>
    )
})
