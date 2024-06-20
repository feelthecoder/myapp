import React, { useState } from "react";

function FormEvent(){

    const [value,setValue] = useState('');

    function handleChange(event){
        setValue(event.target.value);
    }

    return(
        <div>
            <input type="text" value={value} onChange={handleChange}>
            </input>
            <p>value : {value}</p>
        </div>
    );
}

export default FormEvent;