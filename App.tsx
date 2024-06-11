import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/Redux/store';
import {NotesApp} from './src/screens';
import {SafeAreaView} from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <PersistGate loading={null} persistor={persistor}>
          <NotesApp />
        </PersistGate>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
