import react from 'react'
import Tarea from './Tarea'

const List = ({ tareas, setTareas, tareasFiltradas }) => {

    return (


        <div className="todo-container">
            <ul className="todo-list">
                {tareasFiltradas.map((tarea) => (
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