import {connect} from "react-redux";
import SearchForm from "../components/SearchForm/SearchForm";
import {getBooksList} from "../actions/booksActions";
import React from "react";


const SearchFormContainer = ({getBooksList}) => {

    const onSubmit = (formData) => {
        //{search, pageNumber, pageSize, targetFields, categories, sortingMethod} = formData;
        const {search} = formData;
        if (formData.search){
            getBooksList(search);
        }
    };

    return <SearchForm onSubmit={onSubmit}/>
};

const dispatchProps = {getBooksList};

export default connect(null, dispatchProps)(SearchFormContainer)