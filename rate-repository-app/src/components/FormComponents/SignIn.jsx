import { View, StyleSheet } from "react-native";
import SignInForm from "./SignInForm";
// import themes from '../../themes/themes';

const styles = StyleSheet.create ({
  container: {
    backgroundColor: 'white'

  }
})



const SignIn = () => {
  return (
    <View style={styles.container}>
    <SignInForm />
    </View>
  )
  ;
};

export default SignIn;
