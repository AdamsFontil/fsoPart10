import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    // paddingTop: 50,
    // backgroundColor: 'black'
  },

  logo: {
    width: 50,
    height: 42,
    borderRadius: 5
  },
});

const DisplayAnImage = ( { ownerAvatarUrl }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
              uri: ownerAvatarUrl
        }}
      />

    </View>
  );
};

export default DisplayAnImage;
