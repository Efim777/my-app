import Button from "../Buttons/Button"
import { useState } from "react"

const TodoItem = ({ todo, index, setTodos }) => {
    const [checked, setChecked] = useState(todo.checked)  

    function editChecked(id){
        setChecked(!checked)
    }
    
    return (
        <li className='list__item' key={index}>
            <label className='list__label' htmlFor={index}>
                <input className='list__input' type="checkbox" id={index} checked={checked} onChange={() => editChecked(todo.id)} />
                <span className='list__id'>{todo.id}.</span>
                <span className='list__title'>{todo.title}</span>
            </label>
            <div className={'list__buttons'}>
                <Button text='edit' />
                <Button text='delete' />
            </div>
        </li>
    )
}

export default TodoItem
