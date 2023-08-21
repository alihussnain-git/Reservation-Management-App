import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {QueryClientProvider} from 'react-query';
import RootNavigator from './src/navigation/RootNavigator';
import {queryClient} from './src/react-query-hooks/react-query-configs';

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={styles.mainContainer}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <RootNavigator />
      </SafeAreaView>
    </QueryClientProvider>
  );
};

const styles = StyleSheet.create({
  mainContainer: {flex: 1},
});

export default App;
