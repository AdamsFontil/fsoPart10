import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Images from './Images'
import themes from '../themes/themes';


const styles = StyleSheet.create({
  item: {
    display: 'flex',
    // padding: 20,
    // borderColor: "blue",
    // borderWidth: 1,
    backgroundColor: 'white',
    gap: 20
  },
  statsContainer: {
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor: 'red',
    // flex: 1, // Use a numeric value for flex
    gap: 30,
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  oneStat: {
    // backgroundColor: 'red',
    alignItems: 'center'
  },
  info: {
    // backgroundColor: 'green',
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    // justifyContent: 'space-between'
  },
  language: {
    backgroundColor: themes.colors.primary,
    color: 'white',
    borderRadius: 5,
    maxWidth: 100,
    padding: 3,
    textAlign: 'center'
  },
  bold: {
    fontWeight: themes.fontWeights.bold
  },
  image: {
    padding: 10,
    gap: 20
  },
  details: {
    padding: 10,
    display: 'flex',
    maxWidth: 300

  },
  secondaryText: {
    color: themes.colors.textSecondary
  }

});

const formatCount = (count) => {
  if (count >= 1000) {
    return (count / 1000).toFixed(1) + 'k';
  }
  return count;
};

const RepositoryItem = ({
  fullName,
  description,
  language,
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
  picUrl
}) => {
  return (
    <View style={styles.item}>
        <View style={styles.info}>
          <View style={styles.image}>
          <Images ownerAvatarUrl={picUrl}  />
          </View>
          <View style={styles.details}>
            <Text style={styles.bold}>{fullName}</Text>
            <Text style={styles.secondaryText}>{description}</Text>
            <Text style={styles.language}>{language}</Text>
          </View>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.oneStat}>
            <Text style={styles.bold}>{formatCount(stargazersCount)}</Text>
            <Text style={styles.secondaryText}>Stars</Text>
          </View>
          <View style={styles.oneStat}>
            <Text style={styles.bold}>{formatCount(forksCount)}</Text>
            <Text style={styles.secondaryText}>Forks</Text>
          </View>
          <View style={styles.oneStat}>
            <Text style={styles.bold}>{reviewCount}</Text>
            <Text style={styles.secondaryText}>Reviews</Text>
          </View>
          <View style={styles.oneStat}>
            <Text style={styles.bold} >{ratingAverage}</Text>
            <Text style={styles.secondaryText} >Rating</Text>
          </View>

        </View>


    </View>
  );
};

export default RepositoryItem;
