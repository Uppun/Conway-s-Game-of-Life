import React, { Component } from 'react';
import Grid from './components/Grid';
import LifeActions from './actions/LifeActions';

class App extends Component {
  render() {
    return (
      <div>
        <Grid />
        <button onClick={() => LifeActions.tick()}>Update</button>
      </div>
    );
  }
}

export default App;
