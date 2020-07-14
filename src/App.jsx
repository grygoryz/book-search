import React from "react";
import './App.module.scss';
import Header from "./components/Header/Header";
import BooksListContainer from "./containers/BooksListContainer";

function App() {
  return (
    <div>
        <Header/>
        <BooksListContainer/>
    </div>
  );
}

export default App;
