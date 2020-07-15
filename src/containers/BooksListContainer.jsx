import {connect} from "react-redux";
import BooksList from "../components/BooksList/BooksList";

const mapStateToProps = (state) => {
    return {
        books: state.books.booksList,
        totalCount: state.books.totalCount,
        isFetching: state.books.isFetching
        //currentPage: state.books.currentPage
    }
};

export default connect(mapStateToProps, null)(BooksList)