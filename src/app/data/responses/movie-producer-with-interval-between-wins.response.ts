import MovieProducerWithIntervalBetweenWinsModel from "../models/movie-producer-with-interval-between-wins.model";

export default interface MovieProducerWithIntervalBetweenWinsResponse {
    min: Array<MovieProducerWithIntervalBetweenWinsModel>;
    max: Array<MovieProducerWithIntervalBetweenWinsModel>;
}
