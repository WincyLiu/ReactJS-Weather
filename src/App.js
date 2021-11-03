import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
    <div className="container">
      <Weather />
       <footer className="contact">
        <a
          href="https://github.com/WincyLiu/ReactJS-Weather"
          target="_blank"
          rel="noreferrer"
        >
          Open-Source Code
        </a>
        <span> By Wincy Liu </span>
      </footer>
    </div>
    </div>
  );
}

export default App;
  