import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import User from './components/User';
import States from './components/States';
import React from 'react';
import Counter from './components/Counter';
import Effect from './components/Effect';
const  friends=[
  {
    id:1,
    name:'Ahmet'
  },
  {
    id:2,
    name:'Ayşe'
  },
  {
    id:3,
    name:'Fatma'
  }];
function App() {
const [isVisible,setVisible]=useState(true);
  return (
    <React.Fragment>
      {/* <Header/>
      <User 
      name='Kübra' 
      surname='Moğul' 
      //isLoggedIn={true} 
      age={"27"} 
      friends={friends}
      address={{
        title:'Etimesgut/Ankara',
        zip:34755
      }}
      />
      <States />
      <Counter/> */}
     {/* <h1>{isLoggedIn ? `Benim adım ${name}, soyadım ${surname}`:`Kullanıcı girişi yapın`}</h1> */}
      {isVisible && <Effect/>}
      <button onClick={()=>setVisible(!isVisible)}>Toggle</button>
    </React.Fragment>
  );
}

export default App;
