import React, { Component } from 'react';
import Footer from './Footer';
import List from './List';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Component dari Class App</h1>
        <List />
        <Footer judul='Halaman Footer' nama='MOH. WIKI DARMAWAN' />
      </div>
    );
  }
}

export default App;