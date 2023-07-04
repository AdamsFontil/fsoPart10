import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import themes from '../../themes/themes';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
    // borderColor: "red",
    // borderWidth: 1,
    backgroundColor: themes.colors.background,
    padding: 30,
    // justifyContent: 'space-between'
  },
  text: {
    // marginTop: 20,
    color: 'white',
    fontSize: themes.fontSizes.subheading,
    fontWeight: themes.fontWeights.bold,
    borderColor: themes.colors.textPrimary,
    backgroundColor: 'yellow',
    margin: 10,
    padding:10,
    borderRadius: 5,
    width: 150


  }
  // ...
});






const AppBar = () => {
  return <View style={styles.container}>
    <ScrollView horizontal>
      <Pressable >
      <Link to="/">
      <Text style= {styles.text}>Repositories</Text>
      </Link>
      </Pressable>
      <Pressable >
      <Link to="/signIn">
      <Text style= {styles.text}>Sign In</Text>
      </Link>
      </Pressable>
      <Pressable >
      <Link to="/">
      <Text style= {styles.text}>Repositories</Text>
      </Link>
      </Pressable>
      <Pressable >
      <Link to="/signIn">
      <Text style= {styles.text}>Sign In</Text>
      </Link>
      </Pressable>
    </ScrollView>
  </View>;
};

export default AppBar;
