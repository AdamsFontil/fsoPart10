import React from 'react';
import { View, StyleSheet } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBarTab from './AppBarTab';
import themes from '../themes/themes';
import { Route, Routes, Navigate } from 'react-router-native';
import SignIn from './SignIn';

const styles = StyleSheet.create ({
  mainColor: {
    backgroundColor: themes.colors.mainColor

  }
})

const Main = () => {
  return (
    <View style={styles.mainColor} >
      <AppBarTab />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/signIn" element={<SignIn />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
