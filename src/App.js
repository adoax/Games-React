import React from "react";
import { Link, Router } from "@reach/router";
import { render } from "react-dom";
import Games from "./tic-tac-toe/Games";

const App = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="ticTacToe" className="nav-link">
                Tic Tac Toe
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Router>
        <Home path="/" />
        <TicTacToe path="/ticTacToe" />
      </Router>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <h2>page de bienvenue</h2>
    </div>
  );
};

const TicTacToe = () => {
  return <Games />;
};

export default App;
