import { Observable, Observer } from 'rxjs';
import MovieFilterModel from '../../models/movie-filter.model';

export default class MovieRepositoryMock {
    public get<T>(filter: MovieFilterModel): Observable<T> {
        const data: any = this.getData(filter);

        return new Observable((observer: Observer<any>) => {
            observer.next(data);
        });
    }

    private getData(filter: MovieFilterModel): any {
        if (filter.projection === 'studios-with-win-count') {
            return {
                studios: [
                    { name: 'Columbia', winCount: 9 },
                    { name: 'Sony', winCount: 7 },
                    { name: 'Warner', winCount: 4 },
                    { name: 'Paramount', winCount: 3 }
                ]
            };
        }

        if (filter.projection === 'years-with-multiple-winners') {
            return {
                years: [
                    { year: 1986, winnerCount: 2 },
                    { year: 1990, winnerCount: 2 },
                    { year: 2015, winnerCount: 2 },
                ]
            };
        }

        if (filter.projection === 'max-min-win-interval-for-producers') {
            return {
                max: [{
                    producer: 'Matthew Vaughn',
                    interval: 13,
                    previousWin: 2002,
                    followingWin: 2015
                }],
                min: [{
                    producer: 'Joel Silver',
                    interval: 1,
                    previousWin: 1990,
                    followingWin: 1991
                }]
            };
        }

        if (filter.year && (filter.page === null || filter.page === undefined)) {
            return [
                {
                    id: 1,
                    year: 1990,
                    title: 'Movie Title',
                    studios: ['Studio Name'],
                    producers: ['Producer Name'],
                    winner: true
                },
                {
                    id: 2,
                    year: 1991,
                    title: 'Movie Title 2',
                    studios: ['Studio Name 2'],
                    producers: ['Producer Name 2'],
                    winner: true
                }
            ].filter(item => item.year === filter.year);
        }

        const content = [
            {
                id: 1,
                year: 1990,
                title: "Movie Title",
                studios: ["Studio Name"],
                producers: ["Producer Name"],
                winner: true
            },
            {
                id: 2,
                year: 1991,
                title: "Movie Title 2",
                studios: ["Studio Name 2"],
                producers: ["Producer Name 2"],
                winner: false
            }
        ].filter((item) => {
            if (!filter.year || filter.year === item.year) {
                return true;
            }

            return false;
        }).filter((item) => {
            if (filter.winner === null || filter.winner === undefined || filter.winner === item.winner) {
                return true;
            }

            return false;
        });

        return {
            content,
            pageable: {
                sort:
                {
                    sorted: false,
                    unsorted: true
                },
                pageSize: 0,
                pageNumber: 0,
                offset: 0,
                paged: true,
                unpaged: false
            },
            totalElements: 2,
            last: false,
            totalPages: 1,
            first: true,
            sort:
            {
                sorted: false,
                unsorted: true
            },
            number: 0,
            numberOfElements: 2,
            size: 1
        };
    }
}
