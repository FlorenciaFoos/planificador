import react, { useState } from 'react'
import './App.css';
import Form from './components/Form'

import List from './components/List'

function App() {
  const [inputText, setInputText] = useState('')
  const [tareas, setTareas] = useState([])
  let dia = new Date().toLocaleDateString()
  return (

    <div className='App'>
      <header>  <h1>Tareas del día   {dia}  </h1></header>
      <Form inputText={inputText} setInputText={setInputText} tareas={tareas} setTareas={setTareas} />
      <List tareas={tareas} setTareas={setTareas} />
    </div>

  );



}

export default App;
