import { Injectable } from "@angular/core";
import UseCase from "../base/use-case";
import MovieFilterModel from "../models/movie-filter.model";
import MovieModel from "../models/movie.model";
import PaginatedResponseModel from "../responses/paginated.response";
import MovieRepository from "../repositories/movie.repository";
import MovieStudioWithWinCountResponse from "../responses/movie-studios-with-win-count.response";

@Injectable({
    providedIn: 'root'
})
export class GetMovieStudiosWithWinCountUseCase implements UseCase<void, MovieStudioWithWinCountResponse> {
    public constructor(private movieRepository: MovieRepository) { }

    public execute() {
        return this.movieRepository.get<MovieStudioWithWinCountResponse>({projection: 'studios-with-win-count'});
    }
}
