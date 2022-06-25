import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="New York" />
      <footer>
        This project was coded by Ilze Rieba and is{" "}
        <a href="https://github.com/IlzeRieba/react-weather-app">
          {" "}
          open-sourced on GitHub{" "}
        </a>
      </footer>
    </div>
  );
}

export default App;
