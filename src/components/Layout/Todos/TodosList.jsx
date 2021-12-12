import TodoItem  from "./TodoItem";
import "./Todos.scss";

const TodosList = ({ todos, setTodos }) => {
    return (
        <ul className='list'>
            {
                todos.map((todo, index) => <TodoItem key={index} todo={todo} idex={index} setTodos={setTodos} />)
            }
        </ul>
    )
}

export default TodosList
