import React from 'react';
import { View, StyleSheet } from 'react-native';
import RepositoryList from './Regular/RepositoryList';
import AppBarTab from './Regular/AppBarTab';
import themes from './themes/themes';
import { Route, Routes, Navigate } from 'react-router-native';
import SignIn from './FormComponents/SignIn';

const styles = StyleSheet.create ({
  mainColor: {
    backgroundColor: themes.colors.grey

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
