import React from 'react';
import {MainPage} from './pages/main';
import {Modal} from './components/modal';
import {ThingsProvider} from './context/things-context';
import {Provider} from 'react-redux';
import store from './redux'

function App() {
  return (
	<Provider store ={store}>
    <ThingsProvider>
      <MainPage/>
    </ThingsProvider>
  </Provider>
	);
}

export default App;
