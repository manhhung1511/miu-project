import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
    Grid
  } from '@mui/material';
import TextfieldWrapper from '../FormUI/TextField';
import Button from './Button';

  const INITIAL_FORM_STATE = {
    firstName: ''
  };
  
  const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string()
      .required('Required')
  });

  const Form1 = () => {
    return (
        <Grid container>
            <Formik
              initialValues={{
                ...INITIAL_FORM_STATE
              }}
              validationSchema={FORM_VALIDATION}
              onSubmit={values => {
                console.log(values);
              }}
            >
                <Form>
                <Grid item xs={6}>
                    <TextfieldWrapper
                      name="firstName"
                      label="First Name"
                    />
                  </Grid>
                  
                  <Grid item xs={12}>
                    <Button>
                      Submit Form
                    </Button>
                  </Grid>
                </Form>
            </Formik>
        </Grid>
    );
  } 

export default Form1