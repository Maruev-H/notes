import React from 'react';
import './App.scss';
import Notes from './components/notes/Notes';
import Display from './components/display/Display';

function App() {
  return (
    <div className="App">
      <Notes />
      <Display />
    </div>
  );
}

export default App;
