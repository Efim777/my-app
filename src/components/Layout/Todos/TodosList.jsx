import TodoItem  from "./TodoItem"
import "./Todos.scss"

const TodosList = ({todos}) => {
    return (
        <ul className='list'>
            {
                todos.map((todo, index) => <TodoItem rey={index} todo={todo} idex={index} />)
            }
        </ul>
    )
}

export default TodosList
