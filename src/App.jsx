import React from "react";
import './App.module.scss';
import Header from "./components/Header/Header";
import BooksListContainer from "./containers/BooksListContainer";
import {useTransition, animated} from 'react-spring'
import {Route, Switch, useLocation} from "react-router-dom";
import BookPageContainer from "./containers/BookPageContainer";
import EntryPage from "./components/EntryPage/EntryPage";

// синхронизировать paginator с поиском (баг: с новым поиском пагинатор не перекручивается назад)
// maybe rename books into booksList (and bookPage into book, but maybe not)
// add error handling logic (showing pop up)
// добавить футер

function App() {
    const location = useLocation();

    const transitions = useTransition(location, location => location.pathname, {
        from: {opacity: 0 },
        enter: {opacity: 1 },
        leave: {opacity: 0 }
    });

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
