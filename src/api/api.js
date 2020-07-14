import * as axios from "axios";

// let instance = axios.create({
//     baseURL: "https://www.googleapis.com/books/v1/volumes",
//     headers: {
//         "API-KEY": "AIzaSyCkuPTEjXKJrXhF9XXXj4oT1LizxRtkse8"
//     }
// });

export const googleBooksAPI = {

    getBooksList(searchTerms) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerms}&key=AIzaSyCkuPTEjXKJrXhF9XXXj4oT1LizxRtkse8`)
            .then(res => res.data);
    }
};