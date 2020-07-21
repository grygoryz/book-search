import {
    FETCH_BOOKS,
    FETCH_BOOKS_FAILURE,
    FETCH_BOOKS_SUCCESS,
    FETCH_NEW_PAGE,
    FETCH_NEW_PAGE_FAILURE,
    FETCH_NEW_PAGE_SUCCESS,
    ActionsType,
} from "../actions/BooksListActions";
import {VolumeResource} from "../api/api";
import {SearchingOptions} from "../types/types";

// export const Categories = [{label: "all", value: "all"}, {label: "ART", value: "art"}, {label: "BIOGRAPHY", value: "biography"},
//     {label: "BUSINESS", value: "business"}, {label: "COMICS", value: "comics"}, {label: "COMPUTERS", value: "computers"},
//     {label: "COOKING", value: "cooking"}, {label: "FICTION", value: "fiction"}, {label: "GARDENING", value: "gardening"},
//     {label: "HEALTH", value: "health"}, {label: "HISTORY", value: "history"}, {label: "MEDICAL", value: "medical"},
//     {label: "NATURE", value: "nature"}, {label: "POETRY", value: "poetry"}, {label: "SCIENCE", value: "science"}];
//
// export const PageSizes = [10, 20, 30, 40];
//
// export const SortingMethods = ["relevance", "newest"];

const initialState = {
    booksList: null as Array<VolumeResource> | null,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    currentSearchingOptions: {
        searchTerms: null,
        pageSize: 10,
        category: "all",
        sortingMethod: "relevance"
    } as SearchingOptions | null,
    error: null
};

export const booksListReducer = (state = initialState, action: ActionsType): State => {
    switch(action.type) {
        case FETCH_BOOKS:
        case FETCH_NEW_PAGE:
        {
            return {...state, isFetching: true}
        }
        case FETCH_BOOKS_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                currentSearchingOptions: action.options,
                totalCount: action.totalCount,
                booksList: action.books,
                currentPage: 1
            }
        }
        case FETCH_NEW_PAGE_SUCCESS: {
            return {...state, isFetching: false, booksList: action.books, currentPage: action.pageNumber}
        }
        case FETCH_BOOKS_FAILURE:
        case FETCH_NEW_PAGE_FAILURE: {
            return {...state, isFetching: false}
        }
        default:
            return state;
    }
};

type State = typeof initialState