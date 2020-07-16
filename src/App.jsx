import React from "react";
import './App.module.scss';
import Header from "./components/Header/Header";
import BooksListContainer from "./containers/BooksListContainer";
import { useTransition, animated } from 'react-spring'
import {Route, Switch, useLocation} from "react-router-dom";
import BookPageContainer from "./containers/BookPageContainer";


// потом вынести в MainPage (or SearchPage)
// синхронизировать paginator с поиском (баг: с новым поиском пагинатор не перекручивается назад)
// split books reducer into BooksListReducer and BookPageReducer

function App() {
  return (
    <div>
        <Switch>
            <Route exact path="/">
                <Header/>
                <BooksListContainer/>
            </Route>
            <Route path="/book/:bookId?" render={() => <BookPageContainer/>}/>
            <Route path="*" render={() => <div>404 PAGE</div>}/>
        </Switch>
    </div>
  );
}

export default App;
