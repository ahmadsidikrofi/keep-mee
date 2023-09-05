import React from 'react';
import NoteList from './NoteList';
import Header from './Header';

const App = () => {
  return (
    <div className="container">
      <Header />
      <NoteList />
    </div>
  )
}

export default App;
