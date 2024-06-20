import React, { useState } from "react";


function ButtonClick(){

    const [count,setCount] = useState(0)

    function incrementValue(){
        setCount(count+1)
    }

    return (
        <div>
            <button onClick={incrementValue}>Click Me : {count} </button>
        </div>
    );
}

export default ButtonClick;