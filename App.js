import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStackNav from './src/navigation/stacks/AppStackNav';
import store from './src/state/store';
import { Provider } from 'react-redux';

const App = () => {
  return   <Provider store={store}>
              <NavigationContainer>
                  <AppStackNav />
              </NavigationContainer>
          </Provider>
};

export default App;