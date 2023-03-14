import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        style={{ width: "100px", height: "100px", border: "2px solid black" }}
      >
        <a
          href="https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-704d2685a6d5772b24b1c01b713439a29f2ebc33f8ec8ac99d27305213871b3c&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Flogin&response_type=code"
          style={{ display: "inline-block", width: "100%", height: "100%" }}
        >
          Login
        </a>
      </button>
    </div>
  );
}

export default App;
