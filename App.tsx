import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/Redux/store';
import {Home, IndividualDetail} from './src/screens';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={Home}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="IDetails"
                component={IndividualDetail}
                options={{
                  headerShown: true,
                  headerTitle: 'Item Details',
                  headerLeftLabelVisible: false,
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
