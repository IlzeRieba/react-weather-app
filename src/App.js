import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>React Weather App</h1>

      <footer>
        This app was coded by Ilze Rieba and is
        <a
          href="https://github.com/IlzeRieba/react-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          open-sourced on GitHub{" "}
        </a>{" "}
        and hosted on{" "}
        <a href="" target="_blank" rel="noopener noreferrer">
          {" "}
          Netlify{" "}
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
