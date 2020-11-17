import react, { useState } from 'react'





const Form = ({ inputText, setInputText, tareas, setTareas, setStatus }) => {

    const selectFilter = (e) => {
        setStatus(e.target.value)
    }

    const getText = (e) => {
        setInputText(e.target.value)
    }
    const addTarea = (e) => {
        e.preventDefault()
        setTareas([
            ...tareas, { text: inputText, completed: false, id: Math.random() }
        ])
        setInputText('')
    }


    return (


        <form>
            <input value={inputText} onChange={getText} type="text" className="todo-input" />
            <button onClick={addTarea} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={selectFilter} name="todos" className="filter-todo">
                    <option value="all">Todas</option>
                    <option value="completed">Finalizadas</option>
                    <option value="uncompleted">Sin hacer</option>
                </select>
            </div>
        </form>
    )

}


export default Form;