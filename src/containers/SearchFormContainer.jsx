import {connect} from "react-redux";
import SearchForm from "../components/SearchForm/SearchForm";
import {requestBooks} from "../actions/booksActions";
import {useHistory} from "react-router-dom"
import React from "react";


const SearchFormContainer = ({requestBooks, searchingOptions}) => {
    const history = useHistory();

    const onSubmit = (formData) => {
        if (formData.searchTerms){
            requestBooks(formData);
            history.push("/books")
        }
    };

    return <SearchForm initialValues={searchingOptions} onSubmit={onSubmit}/>
};

const dispatchProps = {requestBooks};

const mapStateToProps = (state) => {

    return {
        searchingOptions: state.books.currentSearchingOptions
    }
}

export default connect(mapStateToProps, dispatchProps)(SearchFormContainer)