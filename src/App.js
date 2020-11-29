import react, { useEffect, useState } from 'react'
import './App.css';
import Form from './components/Form'

import List from './components/List'

function App() {
  //states
  const [inputText, setInputText] = useState('')
  const [tareas, setTareas] = useState([])
  const [status, setStatus] = useState('all')
  const [tareasFiltradas, setTareasFiltradas] = useState([])

  //display fecha
  let dia = new Date().toLocaleDateString()


  //una sola vez cuando la app arranca
  useEffect(() => {
    getLocalTareas();

  }, [])


  useEffect(() => {
    saveLocalTareas();
    FilterSelect();
  }, [tareas, status])


  const FilterSelect = () => {
    switch (status) {
      case 'completed':
        setTareasFiltradas(tareas.filter((tarea) => tarea.completed === true))
        break;
      case 'uncompleted':
        setTareasFiltradas(tareas.filter((tarea) => tarea.completed === false))
        break;
      default:
        setTareasFiltradas(tareas)
        break;
    }
  }

  const saveLocalTareas = () => {

    localStorage.setItem('tareas', JSON.stringify(tareas))

  }


  const getLocalTareas = () => {
    if (localStorage.getItem('tareas') === null) {
      localStorage.setItem('tareas', JSON.stringify([]))
    }
    else {

      let LocalTareas = JSON.parse(localStorage.getItem('tareas'))
      setTareas(LocalTareas)
    }
  }
  return (

    <div className='App'>
      <header>  <h1>Tareas del día   {dia}  </h1></header>
      <Form setStatus={setStatus} inputText={inputText} setInputText={setInputText} tareas={tareas} setTareas={setTareas} />
      <List tareas={tareas} tareasFiltradas={tareasFiltradas} setTareas={setTareas} />
    </div>

  );



}

export default App;
