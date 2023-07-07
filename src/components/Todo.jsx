import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import '../Todo.css'
import { CheckContext } from '../App'
import { useState, useContext } from 'react'


const Todo = ({todoList}) => {
    const [isChecked, setIsChecked] = useContext(CheckContext);

    const handleToggle = () => {
        setIsChecked(isChecked => !isChecked)
    }
    
    // console.log(todoList, isChecked)

    return (
        todoList.length === 0 ? <h3>No Todos</h3> :
        todoList.map((todo, index)=>{
            return (
                <div className='todo-container' key={index}>
                    <div className='display-flex'>
                    <div>
                        {isChecked ? <p><del>{todo.todoTask}</del></p> : <p>{todo.todoTask}</p>}
                        <span>{todo.todoTag}</span>
                    </div>
                    <div>
                        <input type="checkbox" checked={isChecked} onChange={handleToggle} />   
                    </div>
                    </div>
                    <hr />
                    <div className='display-flex'>
                        <div>
                            <span>{todo.date}</span>
                            <span>{todo.time}</span>
                        </div>
                        <div>
                            <button><FontAwesomeIcon icon={faPenToSquare} /></button>
                            <button><FontAwesomeIcon icon={faTrash} /></button>
                        </div>
                    </div>
                </div>
            )
        })
    );
}
 
export default Todo;