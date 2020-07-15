import * as axios from "axios";

const DEFAULT_PARAMS = {
    key: "AIzaSyCkuPTEjXKJrXhF9XXXj4oT1LizxRtkse8"
};

const instance = axios.create({
    baseURL: "https://www.googleapis.com/books/v1/volumes",
});

export const googleBooksAPI = {

    getBooksList(searchTerms, pageNumber, pageSize) {
        const startIndex = (pageNumber - 1) * pageSize;

        return instance.get(`?q=${searchTerms}`, {params: {...DEFAULT_PARAMS}})
            .then(res => res.data);
    }
};