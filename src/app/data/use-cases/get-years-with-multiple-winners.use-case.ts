import { Injectable } from "@angular/core";
import UseCase from "../base/use-case";
import YearWithMultipleMovieWinnerResponse from "../responses/year-with-multiple-movie-winner.response";
import MovieRepository from "../repositories/movie.repository";

@Injectable({
    providedIn: 'root'
})
export default class GetYearsWithMultipleWinnersUseCase implements UseCase<void, YearWithMultipleMovieWinnerResponse> {
    public constructor(private movieRepository: MovieRepository) { }

    public execute() {
        return this.movieRepository.get<YearWithMultipleMovieWinnerResponse>({ projection: 'years-with-multiple-winners' });
    }
}
