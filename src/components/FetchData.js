import React, { useEffect, useState } from "react";

function FetchData(){

    const [data,setData] = useState([]);

    useEffect(()=>{

        const headers = new Headers({
            "Content-Type": "application/json",
            "x-api-key": "DEMO-API-KEY"
          });
          
          var requestOptions = {
            method: 'GET',
            headers: headers,
            redirect: 'follow'
          };
          
          fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10", requestOptions)
            .then(response => response.json())
            .then(result => setData(result))
            .catch(error => console.log('error', error)); 

    },[])


    return (
        <div>
            <h1>CAT LIST API DATA FETCH</h1>
        <ul>
            {data.map((cat,index)=>(
                <div>
                    <li className="catList" key={cat.id}><img src={cat.url} height={200} width={200}/><h3>Breed Information</h3>{cat.breeds.map((breed,i)=>(
                        <div>
                        <li>{breed.name}</li>
                        <li>{breed.description}</li>
                        <li>{breed.temperament}</li>
                        <li>{breed.life_span}</li>
                        <li><a href={breed.wikipedia_url}>Wikipedia</a></li>
                        </div>
                    ))}</li><br/>
                </div>
            ))}
        </ul>
        </div>
    )


}

export default FetchData;