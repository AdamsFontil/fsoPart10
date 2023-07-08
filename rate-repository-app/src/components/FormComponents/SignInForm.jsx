import React from 'react';
import { Text, Alert, View, Pressable, StyleSheet } from 'react-native';
import { Formik, useField } from 'formik';
import themes from '../themes/themes';
import * as yup from 'yup';
import FormikTextInput from './FormikTextInput';

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
  const onSubmit = values => {
    const username = values.username;
    const password = values.password;

    if (typeof username === 'string' && typeof password === 'string' && password !== '') {
      const info = ` user----${username}  pass---${password}`;
      Alert.alert(`Your username and password are: ${info}`);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default ShowInputs;


// import React from 'react';
// import { TextInput as NativeTextInput, Text, Alert, View, Pressable, StyleSheet } from 'react-native';
// import { Formik, useField } from 'formik';
// import themes from '../../themes/themes';
// import * as yup from 'yup';

// const validationSchema = yup.object().shape({
//   username: yup
//     .string()
//     .min(3, 'Username must be longer or equal to 3')
//     .required('Username is required'),
//   password: yup
//     .string()
//     .min(3, 'Password must be longer or equal to 3 characters')
//     .required('Password is required'),
// });

// const styles = StyleSheet.create({
//   container: {
//     display: 'flex',
//     padding: 20,
//   },
//   input: {
//     padding: 10,
//     borderWidth: 2,
//     marginBottom: 10,
//     borderRadius: 5,
//   },
//   button: {
//     padding: 10,
//     borderWidth: 1,
//     marginBottom: 10,
//     backgroundColor: themes.colors.primary,
//     textAlign: 'center',
//     color: 'white',
//     borderRadius: 5,
//   },
//   errorText: {
//     marginTop: 5,
//     borderWidth: 5,
//     borderColor: 'red',
//   },
// });

// const initialValues = {
//   username: '',
//   password: '',
// };

// const CustomTextInput = ({ style, error, ...props }) => {
//   const textInputStyle = [style];

//   return (
//     <>
//       <NativeTextInput style={textInputStyle} {...props} />
//       {error && <Text style={styles.errorText}>{error}</Text>}
//     </>
//   );
// };

// const SignInForm = ({ onSubmit }) => {
//   const [usernameField, usernameMeta, usernameHelpers] = useField('username');
//   const [passwordField, passwordMeta, passwordHelpers] = useField('password');

//   return (
//     <View style={styles.container}>
//       <CustomTextInput
//         style={styles.input}
//         placeholder="Username"
//         value={usernameField.value}
//         onChangeText={(text) => usernameHelpers.setValue(text)}
//         error={usernameMeta.touched && usernameMeta.error}
//       />
//       <CustomTextInput
//         style={styles.input}
//         placeholder="Password"
//         value={passwordField.value}
//         onChangeText={(text) => passwordHelpers.setValue(text)}
//         error={passwordMeta.touched && passwordMeta.error}
//       />
//       <Pressable onPress={onSubmit}>
//         <Text style={styles.button}>Sign In</Text>
//       </Pressable>
//     </View>
//   );
// };

// const showInputs = () => {
//   const onSubmit = (values) => {
//     const username = values.username;
//     const password = values.password;

//     if (typeof username === 'string' && typeof password === 'string' && password !== '') {
//       const info = ` user----${username}  pass---${password}`;
//       Alert.alert(`Your username and password are: ${info}`);
//     }
//   };

//   return (
//     <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
//       {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
//     </Formik>
//   );
// };

// export default showInputs;
