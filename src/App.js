import React, { Component } from 'react';
import { Provider } from 'react-redux';

import PadKit from './components/PadKit';
import Display from './components/Display';
import Switch from './components/Switch';
import KitSwitch from './components/KitSwitch';
import Mixer from './components/Mixer';
import store from './store';

import './App.scss';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div id="drum-machine">
          <PadKit />
          <div className="controls-container">
            <Switch text="Power" />
            <Display />
            <Mixer />
            <KitSwitch text="Kit" />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
