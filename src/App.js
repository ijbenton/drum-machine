import React, { Component } from 'react';
import './App.scss';
import { Provider } from 'react-redux';

import PadKit from './Components/PadKit';
import Display from './Components/Display';
import Switch from './Components/Switch';
import KitSwitch from './Components/KitSwitch';
import Mixer from './Components/Mixer';
import store from './store';

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
