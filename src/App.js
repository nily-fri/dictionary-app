import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
      </div>
      <main>
        <Dictionary defaultKeyword="sunset" />
      </main>
      <footer className="App-footer">
        created by{" "}
        <a href="https://github.com/nily-fri?tab=repositories">Nily Friedman</a>
      </footer>
    </div>
  );
}

export default App;
