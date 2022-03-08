import { Injectable } from "@angular/core";
import UseCase from "../base/use-case";
import MovieModel from "../models/movie.model";
import MovieRepository from "../repositories/movie.repository";

@Injectable({
    providedIn: 'root'
})
export default class GetAllMovieWinnersByYearUseCase implements UseCase<number, Array<MovieModel>> {
    public constructor(private movieRepository: MovieRepository) { }

    public execute(year: number) {
        return this.movieRepository.get<Array<MovieModel>>({ year, winner: true });
    }
}
