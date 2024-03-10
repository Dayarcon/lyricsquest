import './App.css';
import axios from 'axios';
import { useState } from 'react';
function App() {
  const [artist, setArtist]= useState("");
  const [song, setTitle]= useState("");
  const [lyrics, setLyrics]= useState("");
  function searchLyrics () {
    if (artist === "" || song === "") 
    return;
  }
    axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`,
    { validateStatus: function (status) {
      return status < 500; // Resolve only if the status code is less than 500
    }
  }
  )
  
 .then(res => { 
  console.log(res.data.lyrics);
  setLyrics(res.data.lyrics);
  })
return(
  <div className="App">
    <h1>Lyrics Quest</h1>
    <input className='int' placeholder="Artist name" type="text" onChange={(e) =>{ setArtist(e.target.value) }} />
    <input className='int' placeholder="Song name" type="text" onChange={(e) =>{ setTitle(e.target.value) }} />
    <button className='btn' onClick={() =>searchLyrics()}>Search</button>
    <hr />
    <pre> {lyrics} </pre>
    </div>
);
};
export default App;
