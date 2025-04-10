import { useState } from 'react'
import './App.css'
import Header from  './componenten/Header'
import Counter from './componenten/Counter';
import InlogStatus from './componenten/Inlogstatus';

function App() {
  const [text, setText] = useState("");

  return (
    <>
      <Header />
      <div>
        <h2>Typ iets:</h2>
        <input 
          type="text" 
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <p>Jij schreef: {text}</p>
      </div>
      <Counter />
      <InlogStatus />
    </>
  );
}


export default App
