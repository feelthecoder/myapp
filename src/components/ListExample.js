import React from "react";

function ListExample(){

    const fruits = ['Apple','Banana','Orange','Mango','Peach'];

    return (
        <ul>
            {fruits.map((fruit,index)=>{
            return <li key={index}>{fruit}</li>
            })}
        </ul>
    );
}

export default ListExample;