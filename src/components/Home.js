import React from "react";
import {Link} from 'react-router-dom';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './HomePage';
import About from './About';
import Client from './Client';
import Project from './Project';
import Contact from './Contact';


function HomeComponent(){
    return (
        <div>
            <ul>
                <li>
                    <Link to="/todoapp">TO-DO APP</Link>
                </li>
                <li>
                    <Link to="/catapi">CAT DATA</Link>
                </li>
            </ul>
        </div>
    );
}

function Greeting(){
    return(
        <BrowserRouter>
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/about" exact Component={About} />
        <Route path="/contact" exact Component={Contact} />
        <Route path="/project" exact Component={Project} />
        <Route path="/client" exact Component={Client} />
      </Routes>
    </BrowserRouter>
    )
}

export {HomeComponent,Greeting};