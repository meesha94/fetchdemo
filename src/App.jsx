import './App.css';

//https://cat-fact.herokuapp.com/facts/random

const App = () => {
  const handleFetch = async () => {
    const response = await fetch("https://cat-fact.herokuapp.com/facts/random")
    console.log(response)
  };
  
  return (
    <div>
      <h1>Hello world</h1>
      <button onClick={handleFetch}>Run the fetch request!</button>
    </div>
  )
};

export default App;
