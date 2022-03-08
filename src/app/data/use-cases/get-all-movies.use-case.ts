import { Injectable } from "@angular/core";
import UseCase from "../base/use-case";
import MovieFilterModel from "../models/movie-filter.model";
import MovieModel from "../models/movie.model";
import PaginatedResponseModel from "../responses/paginated.response";
import MovieRepository from "../repositories/movie.repository";

@Injectable({
    providedIn: 'root'
})
export default class GetAllMoviesUseCase implements UseCase<MovieFilterModel, PaginatedResponseModel<MovieModel>> {
    public constructor(private movieRepository: MovieRepository) { }

    public execute(filter: MovieFilterModel) {
        return this.movieRepository.get<PaginatedResponseModel<MovieModel>>(filter);
    }
}
