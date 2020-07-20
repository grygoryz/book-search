import * as axios from "axios";

const DEFAULT_PARAMS = {
    key: "AIzaSyCkuPTEjXKJrXhF9XXXj4oT1LizxRtkse8"
};

const instance = axios.create({
    baseURL: "https://www.googleapis.com/books/v1/volumes",
});

export const googleBooksAPI = {
    getBooksList({searchTerms, pageNumber = 1, pageSize = 10, sortingMethod = "relevance", categories = "all"}) {
        const startIndex = (pageNumber - 1) * pageSize;

        const params = {
            ...DEFAULT_PARAMS,
            startIndex: startIndex,
            orderBy: sortingMethod,
            maxResults: pageSize,
        };

        return instance.get(`?q=${searchTerms}${categories !== "all" ? `+subject:${categories}` : ""}`, {params})
            .then(res => res.data);
    },
    getBook(bookId) {
        return instance.get(`/${bookId}`, {params: DEFAULT_PARAMS})
            .then(res => res.data)
    }
};