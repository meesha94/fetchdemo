import './App.css';
import  { useState, useEffect } from "react";

//https://cat-fact.herokuapp.com/facts/random

const App = () => {
  const [fact, setFact] = useState({})

  useEffect(() => {
    handleFetch()
  }, [])

  useEffect(() => {
    console.log("the fact changed")

  },[fact])


  const handleFetch = async () => {
    const response = await fetch("https://cat-fact.herokuapp.com/facts/random")
    const data = await response.json()
   
    
    setFact(data)
  };
  
  return (
    <div>
      <h1>Hello API's!</h1>
      <button onClick={handleFetch}>Run the fetch request!</button>
      <p>{fact.text}</p>
    </div>
  )
};

export default App;
