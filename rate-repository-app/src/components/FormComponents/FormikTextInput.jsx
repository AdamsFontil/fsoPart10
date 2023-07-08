import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';
// import { TextInput, Text } from 'react-native';

import { StyleSheet } from 'react-native';



const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    borderWidth: 5,
    borderColor: 'red',
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);

  // Check if the field is touched and the error message is present
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {/* Show the error message if the value of showError variable is true  */}
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;


// const CustomTextInput = ({ style, error, ...props }) => {
//   const textInputStyle = [style];

//   return (
//     <>
//       <NativeTextInput style={textInputStyle} {...props} />
//       {error && <Text style={styles.errorText}>{error}</Text>}
//     </>
//   );
// };
