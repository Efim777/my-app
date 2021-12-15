import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import { useState } from "react"
import { API } from "../../../utils/api";

const TodoItem = ({ todo, setTodos }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [title, setTitle] = useState(todo.title);
    const [checked, setChecked] = useState(todo.checked)
    const [disabled, setDisabled] = useState(false);

    async function editHelper(id, keyToChange, value) {
        try {
            const response = await API.patch(`/posts/${id}`, {[keyToChange]: value});
            setTodos((prev) => prev.map(todo => todo.id === id ? response.data : todo));
        } catch (e) {
            console.error(e)
        }
    }

    //--------delete Todos---------
    async function deleteTodo(id) {
        try {
            await API.delete(`/posts/${id}`);
            setTodos((prev) => prev.filter(todo => todo.id !== id));
        } catch (e){
            console.error(e)
        }
    }

    //------edit Todos------
    async function editTodo(id) {
        setDisabled(disabled)
        setIsEdit(!isEdit)
        isEdit && editHelper(id, 'title', title)
        setDisabled(!disabled)
    }

    function editTitle(e){
        setTitle(e.target.value)
    }

    function editChecked(id){
        setChecked(!checked)
        editHelper(id, 'checked', checked)
    }
    
    return (
        <li className='list__item'>
            <label className='list__label'>
                <input
                    className="list__checkbox"
                    id={todo.id}
                    type="checkbox"
                    checked={checked}
                    onChange={() => editChecked(todo.id)}
                    disabled={disabled}
                />
                <label htmlFor={todo.id} className="list__label-checkbox" />    
                <span className='list__id'>{todo.id}.</span>
                {
                    isEdit ?
                        (<input type='text' value={title} onChange={editTitle}/>)
                        :
                        (<span className={!checked ? "list__title" : "list__title-done"}>{title}</span>)
                }
            </label>
            <div className={'list__buttons'}>
                {
                    isEdit ?
                        (<Button onClick={() => editTodo(todo.id)}>Save</Button>)
                        :
                        (<EditIcon color="primary" size="large" onClick={() => editTodo(todo.id)} className="button"></EditIcon>)
                }

                <IconButton
                    color="primary"
                    aria-label="delete" 
                    size="large"
                    onClick={() => deleteTodo(todo.id)}
                    className="button"
                >
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </div>
        </li>
    )
}

export default TodoItem
