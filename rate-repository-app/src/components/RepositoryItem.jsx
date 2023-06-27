import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderColor: "blue",
    borderWidth: 1
  },

});

const RepositoryItem = ({
  fullName,
  description,
  language,
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
}) => {
  return (
    <View style={styles.item}>
      <Text>FullName: {fullName}</Text>
      <Text>Description: {description}</Text>
      <Text>Language: {language}</Text>
      <Text>Forks: {forksCount}</Text>
      <Text>Stars: {stargazersCount}</Text>
      <Text>Ratings: {ratingAverage}</Text>
      <Text>Reviews: {reviewCount}</Text>
    </View>
  );
};

export default RepositoryItem;
