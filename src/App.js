import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import { Greeting } from './components/Home';
import UserGreeting from './components/UserGreeting';
import ButtonClick from './components/ButtonClick';
import FormEvent from './components/FormExample';
import ConditionalRender from './components/ConditionalRender';
import ListExample from './components/ListExample';
import ListKeys from './components/ListKeys';
import ControlledForm from './components/ControlledForm';
import EffectHook from './components/EffectHook';
import FriendStatus from './components/CustomHook';
import ToDoApp from './components/ToDoApp';
import FetchData from './components/FetchData';
import MyComponent from './components/ClassComponent';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeComponent from './components/Home';
import Home from './components/HomePage';
import About from './components/About';
import Client from './components/Client';
import Project from './components/Project';
import Contact from './components/Contact';
import Board from './components/Board';
import { ThemeProvider,useTheme } from './components/ThemeContext';


function App() {

  const friend = {
    id: 'vikas.k2',
    name: 'Vikas'
  };

  const themeObject = useTheme();

  return (


    <BrowserRouter>
      <ThemeProvider >
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/about" exact Component={About} />
          <Route path="/contact" exact Component={Contact} />
          <Route path="/project" exact Component={Project} />
          <Route path="/client" exact Component={Client} />
          <Route path="/flipgame" exact Component={Board} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>

    // <div className="App">
    //   <ToDoApp/>
    //   <FetchData/>
    //   <MyComponent/>
    //   <HelloWorld/>
    //   <Greeting/>
    //   <UserGreeting userLog="false"/>
    //   <ButtonClick/>
    //   <FormEvent/>
    //   <ConditionalRender/>
    //   <ListExample/>
    //   <ListKeys/>
    //   <ControlledForm/>
    //   <EffectHook/>
    //   <FriendStatus friend={friend}/>
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
