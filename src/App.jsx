import React from "react";
import './App.module.scss';
import Header from "./components/Header/Header";
import BooksListContainer from "./containers/BooksListContainer";
import {animated} from 'react-spring'
import {Route, Switch} from "react-router-dom";
import BookPageContainer from "./containers/BookPageContainer";
import EntryPage from "./components/EntryPage/EntryPage";
import useRoutingTransition from "./hooks/useRoutingTransition";

// синхронизировать paginator с поиском (баг: с новым поиском пагинатор не перекручивается назад)
// add error handling logic (showing pop up)
// добавить футер

function App() {
    const transitions = useRoutingTransition();

    return (
        <div>
            <Header/>
            {transitions.map(({item, props, key}) => (
                <animated.div key={key} style={props}>
                    <Switch location={item}>
                        <Route path="/books/:bookId" render={() => <BookPageContainer/>}/>
                        <Route to path="/books" render={() => <BooksListContainer/>}/>
                        <Route exact path="/" render={() => <EntryPage/>}/>
                    </Switch>
                </animated.div>
            ))}
        </div>
    );
}

export default App;
