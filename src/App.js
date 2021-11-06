import "./App.css";
import Weather from "./Weather";

function App() {
  return (
   <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer className="contact">
          This project was coded by {""}
          <a
            href="https://stupefied-snyder-c092d0.netlify.app/index.html#"
            target="_blank"
            rel="noreferrer"
          >
            Wincy Liu
          </a>{" "}
          and is {""}
          <a
            href="https://github.com/WincyLiu/ReactJS-Weather"
            target="_blank"
            rel="noreferrer"
          >
            Open-Source Code
          </a>
      </footer>
    </div>
    </div>
  );
}

export default App;
  
