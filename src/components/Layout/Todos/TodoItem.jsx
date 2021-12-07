import Button from "../Buttons/Button"

const TodoItem = ({todo, index}) => {
    return (
        <li className='list__item' key={index}>
            <label className='list__label' htmlFor={index}>
                <input className='list__input' type="checkbox" id={index} checked={todo.checked} onChange={(e) => e.target.checked} />
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
