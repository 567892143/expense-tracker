import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://expense-tracker-hq0y.onrender.com/api/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  },[]);

  return (
  <div className="App">
    <h1>Messsage from backend</h1>
    <h1>Fetching :{message}</h1>
  </div>
  );
}

export default App;
