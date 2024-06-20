import React, { useEffect, useState } from "react";

function EffectHook(){

    const [data,setData] = useState(null);

    useEffect(()=>{

        const headers = new Headers({
            "Content-Type": "application/json",
            "x-api-key": "DEMO-API-KEY",
            "Access-Control-Allow-Origin":"*"
          });
          
          var requestOptions = {
            method: 'GET',
            headers: headers,
            redirect:'follow'
          };
          
          fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions)
            .then(response => response.text())
            .then(result =>  setData(result))
            .catch(error => console.log('error', error));

    },[]);


    return(
        <div>
            <p>Data: {data}</p>
        </div>
    )
}

export default EffectHook;