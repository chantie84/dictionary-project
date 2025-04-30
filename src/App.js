import "./App.css";
import Dictionary from "./Dictionary";
import logo from "./logo.jpg";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="rounded App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>Coded by Chantal Crompvoets</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
