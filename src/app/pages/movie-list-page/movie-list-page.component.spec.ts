import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'src/app/components/card/card.module';
import { PaginationModule } from 'src/app/components/pagination/pagination.module';
import MovieRepositoryMock from 'src/app/data/mocks/repositories/movie.repository.mock';
import MovieRepository from 'src/app/data/repositories/movie.repository';

import { MovieListPageComponent } from './movie-list-page.component';

describe('MovieListPageComponent', () => {
    let component: MovieListPageComponent;
    let fixture: ComponentFixture<MovieListPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MovieListPageComponent],
            providers: [
                {
                    provide: MovieRepository,
                    useClass: MovieRepositoryMock
                }
            ],
            imports: [CardModule, FormsModule, PaginationModule]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MovieListPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should filter movies by year', () => {
        const compiled = fixture.debugElement.nativeElement;

        component.filter.year = 1990;
        component.onChangeYear();
        fixture.detectChanges();

        expect(component.movies).toEqual([{
            id: 1,
            year: 1990,
            title: "Movie Title",
            studios: ["Studio Name"],
            producers: ["Producer Name"],
            winner: true
        }]);

        expect(compiled.querySelector('table>tbody>tr>td').textContent).toContain('1');

        component.filter.year = 1991;
        component.onChangeYear();
        fixture.detectChanges();

        expect(component.movies).toEqual([{
            id: 2,
            year: 1991,
            title: "Movie Title 2",
            studios: ["Studio Name 2"],
            producers: ["Producer Name 2"],
            winner: false
        }]);

        expect(compiled.querySelector('table>tbody>tr>td').textContent).toContain('2');
    });

    it('should filter movies by winner', () => {
        const compiled = fixture.debugElement.nativeElement;

        component.filter.winner = true;
        component.onChangeYear();
        fixture.detectChanges();

        expect(component.movies).toEqual([{
            id: 1,
            year: 1990,
            title: "Movie Title",
            studios: ["Studio Name"],
            producers: ["Producer Name"],
            winner: true
        }]);

        expect(compiled.querySelector('table>tbody>tr>td').textContent).toContain('1');

        component.filter.winner = false;
        component.onChangeYear();
        fixture.detectChanges();

        expect(component.movies).toEqual([{
            id: 2,
            year: 1991,
            title: "Movie Title 2",
            studios: ["Studio Name 2"],
            producers: ["Producer Name 2"],
            winner: false
        }]);

        expect(compiled.querySelector('table>tbody>tr>td').textContent).toContain('2');
    });

    it('should by empty when not loaded', () => {
        component.movies = [];

        fixture.detectChanges();

        const compiled = fixture.debugElement.nativeElement;

        expect(compiled.querySelector('table>tbody>tr>td').textContent).toContain('No data avaliable');
    });
});
