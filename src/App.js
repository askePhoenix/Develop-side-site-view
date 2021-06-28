
import React from 'react'
import LoginPage from "./domain/login/LoginPage";
import BlogPage from "./domain/blog/BlogPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <LoginPage></LoginPage>
      <BlogPage></BlogPage>
    </div>
  );
}

export default App;
