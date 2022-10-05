import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0)

    const handleClick = (value) => {
        setCount(value);
    }

    return (
        <>
        <button onClick={() => handleClick(count -1)}>-</button>
        <h4>Cantidad {count}</h4>
        <button onClick={() => handleClick(count +1)}>+</button>
        </>
    )
}

export default Counter