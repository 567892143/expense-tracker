import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://YOUR_BACKEND_URL.com")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  },[]);

  return (
  <div className="App">
    <h1>{message}</h1>
  </div>
  );
}

export default App;