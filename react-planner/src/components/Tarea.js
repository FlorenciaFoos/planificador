import react from 'react'


const Tarea = ({ text, tareas, setTareas, tarea }) => {

    const completeTarea = () => {
        setTareas(tareas.map((item) => {

            if (item.id === tarea.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item
        }))

    }
    const deleteTarea = () => {
        setTareas(tareas.filter((el) => el.id !== tarea.id))

    }

    return (


        <div className="todo">

            <li className={`todo-item  ${tarea.completed ? "completed" : ''}`}>{text}</li>
            <button onClick={completeTarea} className='complete-btn'> <i className='fas fa-check'></i> </button>
            <button onClick={deleteTarea} className='trash-btn'> <i className='fas fa-trash'></i> </button>
        </div>

    )

}


export default Tarea;