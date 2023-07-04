import React from 'react';
import { TextInput, Text, Alert, View, Pressable, StyleSheet } from 'react-native';
import { Formik, isString, useField } from 'formik';
import themes from '../../themes/themes';

const styles = StyleSheet.create ({
  container: {
    // backgroundColor: 'grey',
    display: 'flex',
    padding: 20,
    // borderWidth: 2,
    // borderColor: 'green'
  },
  input: {
    padding: 10,
    borderWidth: 2,
    marginBottom: 10,
    borderRadius: 5
  },
  button: {
    padding: 10,
    borderWidth: 1,
    marginBottom: 10,
    backgroundColor: themes.colors.primary,
    textAlign: 'center',
    color: 'white',
    borderRadius: 5
  },

})

const initialValues = {
  username: '',
  password: '',
};

const SignInForm = ({ onSubmit }) => {
  const [usernameField, usernameMeta, usernameHelpers] = useField('username');
  const [passwordField, passwordMeta, passwordHelpers] = useField('password');
  console.log('usernameMeta',usernameMeta)
  console.log('passwordMeta',passwordMeta)

  return (
    <View style= {styles.container}>
      <TextInput style= {styles.input} placeholder="Username" value={usernameField.value} onChangeText={text => usernameHelpers.setValue(text)} />
      <TextInput style= {styles.input} placeholder="Password" value={passwordField.value} onChangeText={text => passwordHelpers.setValue(text)} />
        <Pressable onPress={onSubmit}>
          <Text style= {styles.button}>Sign In</Text>
          </Pressable>
    </View>
  );
};

const showInputs = () => {
  const onSubmit = values => {
    const username = (values.username);
    const password = (values.password);

    if (isString(username) && isString(password) && password !== '') {
      const info = ` user----${username}  pass---${password}`

      Alert.alert(`Your username and pass are: ${info}`);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default showInputs;
