import axios from "axios";
import {VolumeInfo, SearchingOptions} from "../types/types";

const DEFAULT_PARAMS = {
    key: "AIzaSyDc25tuyICvu7cjAzeU81MvmaDzDDQI_eU"
};

const instance = axios.create({
    baseURL: "https://www.googleapis.com/books/v1/volumes",
});

export const googleBooksAPI = {
    getBooksList({searchTerms, pageNumber, pageSize, sortingMethod, categories}: SearchingOptions) {
        const startIndex = (pageNumber - 1) * pageSize;

        const params = {
            ...DEFAULT_PARAMS,
            startIndex: startIndex,
            orderBy: sortingMethod,
            maxResults: pageSize,
        };

        return instance.get<GetBooksListResponse>(`?q=${searchTerms}${categories !== "all" ? `+subject:${categories}` : ""}`, {params})
            .then(res => res.data);
    },
    getBook(bookId: string) {
        return instance.get<VolumeResource>(`/${bookId}`, {params: DEFAULT_PARAMS})
            .then(res => res.data)
    }
};

type GetBooksListResponse = {
    items: Array<VolumeResource>
    totalItems: number
}

export type VolumeResource = {
    id: string
    volumeInfo: VolumeInfo
}


