import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import AppRouter from './src/router/AppRouter';
import {Provider} from 'react-redux';
import {store} from './src/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <AppRouter />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;
