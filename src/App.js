import React from 'react';
import './App.css';
import Check from './mycomponent';
import {Provider} from 'react-redux';
import store from './stores';

function App() {
  return (
   <>
   <Provider store={store}>
  <Check/>
   </Provider>
   
   </>
  );
}

export default App;
