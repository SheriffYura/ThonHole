import React from 'react';
import {MainPage} from './pages/main';
import {Modal} from './components/modal';
import {ThingsProvider} from './context/things-context';


function App() {
  return (
    <ThingsProvider>
      <MainPage/>
    </ThingsProvider>
  );
}

export default App;
