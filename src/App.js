import React from 'react'
import Navbar from './components/Navbar'
import Food from './components/Food'
import Menu from './components/Menu'
import Category from './components/Category'

function App() {
  return (
    <div>
      <Navbar/>
      <Food/>
      <Menu/>
      <Category/>
    </div>
  );
}

export default App;
