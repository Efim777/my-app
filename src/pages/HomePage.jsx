// import Nature from "../assets/images/nature.jpg"
// import Button from '@mui/material/Button'
import React from 'react';
import { useEffect, useState } from "react";

const HomePage = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `${count}`
    })

    return(
        <div>
            <h1 className='title'>Home</h1>
            {/* <Button variant="contained">Contained</Button>  */}
            {/* <img src={Nature} alt="Nature"/>  */}

            <button onClick={() => setCount(count + 1)}>CountUp</button>
            <h2>{count}</h2>
            <button onClick={() => setCount(count - 1)}>CountDown</button>
        </div>
    )
} 

export default HomePage