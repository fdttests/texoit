import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

import { environment } from "src/environments/environment";
import MovieFilterModel from "../models/movie-filter.model";
import encodeQueryString from "../utils/encode-query-string";

@Injectable({
    providedIn: 'root'
})
export default class MovieRepository {
    private apiUrl = environment.apiUrl;

    public constructor(
        private http: HttpClient
    ) { }

    public get<T>(filter: MovieFilterModel): Observable<T> {
        const queryString = encodeQueryString(filter);

        return this.http
            .get<T>(`${this.apiUrl}/movies?${queryString}`);
    }
}
