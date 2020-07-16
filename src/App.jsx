import React from "react";
import './App.module.scss';
import Header from "./components/Header/Header";
import BooksListContainer from "./containers/BooksListContainer";
import {useTransition, animated} from 'react-spring'
import {Route, Switch, useLocation} from "react-router-dom";
import BookPageContainer from "./containers/BookPageContainer";


// потом вынести в MainPage (or SearchPage)
// синхронизировать paginator с поиском (баг: с новым поиском пагинатор не перекручивается назад)
// split books reducer into BooksListReducer and BookPageReducer ?
// redirect from booksList to "/" if nothing is fetching
// мб оставить header видимым всегда

function App() {
    return (
        <div>
            <Switch>
                <Route path="/books/:bookId" render={() => <BookPageContainer/>}/>
                <Route path="/">
                    <Header/>
                    <Route exact path="/" render={() => <h1>Entry Page. Search!</h1>}/>
                    <Route to path="/books" render={() => <BooksListContainer/>}/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
