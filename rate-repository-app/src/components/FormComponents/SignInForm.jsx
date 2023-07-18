import React from 'react';
import { Text, View, Pressable, StyleSheet } from 'react-native';
import { Formik, useField } from 'formik';
import themes from '../themes/themes';
import * as yup from 'yup';
import FormikTextInput from './FormikTextInput';
import useSignIn from '../hooks/useSignIn';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Username must be longer or equal to 3')
    .required('Username is required'),
  password: yup
    .string()
    .min(3, 'Password must be longer or equal to 3 characters')
    .required('Password is required'),
});

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 20,
  },
  input: {
    padding: 10,
    borderWidth: 2,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    padding: 10,
    borderWidth: 1,
    marginBottom: 10,
    backgroundColor: themes.colors.primary,
    textAlign: 'center',
    color: 'white',
    borderRadius: 5,
  },
  errorText: {
    marginTop: 5,
    borderWidth: 5,
    borderColor: 'red',
  },
});

const initialValues = {
  username: '',
  password: '',
};

const SignInForm = ({ onSubmit }) => {
  const [usernameField, usernameMeta, usernameHelpers] = useField('username');
  const [passwordField, passwordMeta, passwordHelpers] = useField('password');

  return (
    <View style={styles.container}>
      <FormikTextInput
        style={styles.input}
        placeholder="Username"
        name="username"
        value={usernameField.value}
        onChangeText={text => usernameHelpers.setValue(text)}
        error={usernameMeta.touched && usernameMeta.error}
      />
      <FormikTextInput
        style={styles.input}
        placeholder="Password"
        name="password"
        value={passwordField.value}
        onChangeText={text => passwordHelpers.setValue(text)}
        error={passwordMeta.touched && passwordMeta.error}
      />
      <Pressable onPress={onSubmit}>
        <Text style={styles.button}>Sign In</Text>
      </Pressable>
    </View>
  );
};



const ShowInputs = () => {
    const [signIn] = useSignIn();
    console.log('using SignIn')

    const onSubmit = async (values) => {
      const { username, password } = values;
      console.log('testing submit')
      console.log(values)

      try {
        const { data } = await signIn({ username, password });
        console.log('data2----',data);
      } catch (e) {
        console.log(e);
      }
    };





  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default ShowInputs;
