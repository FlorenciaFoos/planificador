import react from 'react'
import Tarea from './Tarea'

const List = ({ tareas, setTareas }) => {

    return (


        <div className="todo-container">
            <ul className="todo-list">
                {tareas.map((tarea) => (
                    <Tarea tareas={tareas}
                        setTareas={setTareas}
                        key={tarea.id}
                        tarea={tarea}
                        text={tarea.text} />
                ))}


            </ul>
        </div>

    )

}


export default List;