import React, {useState} from 'react';
import './App.css';
import Message from './message.js';
function App() {
      const[count,setCount]=useState(0);
      const[chnaging, newChanging]=useState();


    return (
    <div className={`${chnaging? 'box':'changecolor'}`}>
    <h1>Hello we are doing counting: {count}</h1>
       
    <Message name="abdul moiz" last="attari">
    <p>He is doing practice of react project daily</p>
    <a  href="https://www.google.com">Google</a>
      </Message>
      <Message name="abdul rafay"></Message>
      <button onClick={()=>
        setCount(count+1)
      }>Update Counter</button>    
      <button onClick={()=>newChanging(!chnaging)}>Change color</button>
      <p className="end">This is end of project</p>
    </div>
  );
}

export default App;
