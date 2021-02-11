import { useState, useEffect } from 'react'
import Acts from './img/acts.png'
import './App.css';

function url(path) {
  return process.env.MODE_ENV === "development" ?
  `http://localhost:3101${path}` : path
}

function App() {
  const [data, setData] = useState("")
  useEffect(() => {
    fetch(url("/api/*"))
    .then(res => res.json())
    .then(apiData => setData(apiData.data))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
      <img src={Acts} alt="starwars"/>
      Fortune Says: {data}
      </header>
    </div>
  );
}

export default App;
