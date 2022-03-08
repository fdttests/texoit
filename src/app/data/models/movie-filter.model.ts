export default interface MovieFilterModel {
    page?: number;
    size?: number;
    winner?: boolean | null;
    year?: number | null;
    projection?: 'studios-with-win-count' | 'max-min-win-interval-for-producers' | 'years-with-multiple-winners';
}
