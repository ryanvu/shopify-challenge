import { useState } from 'react';
import './app.scss';

import logo from './assets/shopify.svg'
//components
import Search from './components/Search/Search';
import Movies from './components/Movies/Movies';
import Nominations from './components/Nominations/Nominations';
//context
import { NominationsProvider } from './contexts/NominationsContext';

const apiUrl = "http://www.omdbapi.com/?apikey=cc139321&s="

function App() {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState(null);

  const handleChange = (e) => {
    setInput(e.target.value)
    setLoading(true)
    
    const fetchData = async () =>{
      const res = await fetch(`${apiUrl}${e.target.value}`);
      const data = await res.json();
      setResult(data);
      setTimeout(()=>{
        setLoading(false);
      }, 600)
    }
    fetchData();
  }
  
  return (
    <NominationsProvider>
      <div className="home">
        {/* <img className="logo" src={logo} alt=""/> */}
        <div className="wrap">
          <h1 className="home__title">The Shoppies</h1>
          <Search handleChange={handleChange}/>
            <div className="container">
              <Movies input={input} loading={loading} result={result}/>
              <Nominations />
            </div>
        </div>
      </div>
    </NominationsProvider>
  );
}

export default App;
