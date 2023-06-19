import "./App.css";
import Card from "./Components/Card";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("Bleach");


  useEffect(() => {
    axios.get(`https://api.jikan.moe/v4/anime?q=${search}&limit=20`)
      .then(function (response) {
        // handle success
        setList(response.data.data);
        console.log(response.data.data);
      });
  }, [search]);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input
            placeholder="search for anime"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>Search</button>
        </div>
      </header>
      <div className="cardWrapper">
        {list.map((item, index) => (
          <>
            <Card item={item} />
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
