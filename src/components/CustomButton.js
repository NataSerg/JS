import { useEffect, useState } from "react";

function CustomButton() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('123');
    

}, []);

    
    function handleClick() {
        setCount(count+1);

    }

    return <button onClick={handleClick}>Click me {count}</button>
}

export default CustomButton;