import React from "react";

import publications from "../publications.json";
import Reader from "./book/Reader/Reader";

import AppFilms from "./films/AppFilms";
import Dashboard from './bank/Dashboard/Dashboard'

const App = () => (
  <div>
    <Reader publications={publications} />
    <AppFilms/>
    <Dashboard/>
  </div>
);

export default App;
