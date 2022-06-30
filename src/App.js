import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="New York" />
      <footer>
        This project was coded by Ilze Rieba and is{" "}
        <a href="https://github.com/IlzeRieba/react-weather-app" target="_blank" rel="noopener noreferral">
          {" "}
          open-sourced on GitHub{" "}
        </a>
        and hosted on{" "}
        <a href="https://jade-pegasus-9e9ab7.netlify.app/" target="_blank" rel="noopener noreferral"> Netlify </a>
      </footer>
    </div>
  );
}

export default App;
