import React from "react";
import { useState } from "react";

function ControlledForm(){
   
    const [formData,setformData] = useState({
        username:'',
        password:''
    });

    const handleChange = (e)=>{
        const {name,value} = e.target;

        console.log(name,value)

        setformData({
            ...formData,
            [name]:value
        })

    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formData)
        console.log('form submitted')
        //add logic to save form
    };


    return (

        <form onSubmit={handleSubmit}>
            <label>Username :
                <input type="text" name="username" value={formData.username} onChange={handleChange}/>
            </label>
            <br/>

            <label>Password :
                <input type="password" name="password" value={formData.password} onChange={handleChange}/>
            </label>
            <br/>

            <button type="submit">Submit</button>
        </form>
    );

}


export default ControlledForm;