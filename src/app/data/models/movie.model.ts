export default interface MovieModel {
    id: number;
    year: number;
	title: string;
    studios: Array<string>;
	producers: Array<string>;
	winner: boolean;
}
