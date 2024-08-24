import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigations/RootNavigator';
import { Provider } from 'react-redux';
import redux from './src/redux/slice/store';


const App: React.FC = () => {
  return (
    <Provider store={redux}>
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
    </Provider>
  );
};

export default App;
