import TextField from "@mui/material/TextField";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useEffect, useState } from "react";
import { API } from "../../../utils/api"

const CreateTodo = ({ setTodos }) => {
    const [title, setTitle] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        if(title > 0) setShowError(false)
    }, [title])

    function createTitle(e) {
        setTitle(e.target.value)
    }

    async function createTodo(e){
        if (e.key === 'Enter' || e.type === 'click'){
            if (title) {
                try {
                    setDisabled(!disabled);
                    const response = await API.post('/posts', {title: title, checked: false});
                    setTodos((prev) => [...prev, response.data]);
                    setTitle('');
                    setDisabled(disabled);
                } catch (e) {
                    console.error(e);
                }
            } else {
                setShowError(!showError)
            }
        }
    }

    return (
        <div className='todos-create'>
            <TextField
                id="standard-basic"
                label="Todo text..."
                variant="standard"
                size="small"
                className="todos-create__input"
                value={title}
                onChange={createTitle}
                disabled={disabled}
            />
            <span className={`todos-create__error ${showError ? 'show' : ''}`}>Sorry, the fieled is empty</span>
            <AddCircleIcon
              color="primary"
              fontSize="large"
              onClick={createTodo}
              className="button"
            >
              Add
            </AddCircleIcon>
        </div>
    )
}

export default CreateTodo
