// import './Button.scss';
import Button from '@mui/material/Button';

const Buttons = ({text}) => {
    return (
        // <button className='button'>{text}</button>
        <Button variant="outlined">{text}</Button>
    )
}

export default Buttons
