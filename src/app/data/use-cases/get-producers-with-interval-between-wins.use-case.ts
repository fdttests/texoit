import { Injectable } from "@angular/core";
import UseCase from "../base/use-case";
import MovieRepository from "../repositories/movie.repository";
import MovieProducerWithIntervalBetweenWinsResponse from "../responses/movie-producer-with-interval-between-wins.response";

@Injectable({
    providedIn: 'root'
})
export default class GetProducersWithIntervalBetweenWinsUseCase implements UseCase<void, MovieProducerWithIntervalBetweenWinsResponse> {
    public constructor(private movieRepository: MovieRepository) { }

    public execute() {
        return this.movieRepository.get<MovieProducerWithIntervalBetweenWinsResponse>({ projection: 'max-min-win-interval-for-producers' });
    }
}
