import TextField from '@mui/material/TextField';

const CreateTodo = () => {
    return (
        <div className='todos-create'>
            <TextField id="standard-basic" label="Standard" variant="standard" className="todos-create__input" />
        </div>
    )
}

export default CreateTodo
