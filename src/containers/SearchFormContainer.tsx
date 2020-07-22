import {connect} from "react-redux";
import SearchForm from "../components/SearchForm/SearchForm";
import {requestBooks} from "../actions/BooksListActions";
import {useHistory} from "react-router-dom"
import React from "react";
import {AppState} from "../store/configureStore";
import {SearchingOptions} from "../types/types";

const SearchFormContainer: React.FC<Props> = ({requestBooks, searchingOptions}) => {
    const history = useHistory();

    const onSubmit = (formData: SearchingOptions) => {
        if (formData.searchTerms) {
            requestBooks(formData);
            history.push("/books")
        }
    };

    return <SearchForm initialValues={searchingOptions} onSubmit={onSubmit}/>
};

const mapStateToProps = (state: AppState) => {
    return {
        searchingOptions: state.booksList.currentSearchingOptions
    }
};

export default connect<MapStateProps, MapDispatchProps, {}, AppState>(mapStateToProps, {requestBooks})(SearchFormContainer)

type MapStateProps = {
    searchingOptions: SearchingOptions
}

type MapDispatchProps = {
    requestBooks: (options: SearchingOptions) => void
}

type Props = MapStateProps & MapDispatchProps