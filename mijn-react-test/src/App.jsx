import { useState } from 'react'
import './App.css'
import Header from  './componenten/Header'
import Counter from './componenten/Counter';
import InlogStatus from './componenten/Inlogstatus';
import {useEffect} from 'react';
import Wiki from './componenten/Wiki';
import ReactMarkdown from 'react-markdown';


function App() {
  const [text, setText] = useState("");
  const [githubData, setGithubData] = useState([])
const [githubUser, setGithubUser] = useState("")

const fetchData = () => {
  return fetch(`https://api.github.com/users/${githubUser}`)
    .then((response) => response.json())
    .then((data) => setGithubData(data));
}

useEffect(() => {
  fetchData()
}, [])

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
        <input type="text" placeholder="Search for User" onChange={(e) => setGithubUser(e.target.value)} className="input_search" />
<button onClick={fetchData} className="search_button">Search Github</button>
<img src={githubData.avatar_url} height="100" width="100" />
<p>{githubData.name}</p>
      </div>
      <Counter />
      <InlogStatus />
      <Wiki />
      
    </>
  );
}


export default App
