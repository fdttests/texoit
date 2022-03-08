import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'src/app/components/card/card.module';
import MovieRepositoryMock from 'src/app/data/mocks/repositories/movie.repository.mock';
import MovieRepository from 'src/app/data/repositories/movie.repository';

import { CardMovieWinnersByYearComponent } from './card-movie-winners-by-year.component';

describe('CardMovieWinnersByYearComponent', () => {
    let component: CardMovieWinnersByYearComponent;
    let fixture: ComponentFixture<CardMovieWinnersByYearComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CardMovieWinnersByYearComponent],
            providers: [
                {
                    provide: MovieRepository,
                    useClass: MovieRepositoryMock
                }
            ],
            imports: [
                FormsModule,
                CardModule
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CardMovieWinnersByYearComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should filter movies by year 1990', fakeAsync(() => {
        const compiled = fixture.debugElement.nativeElement;

        component.selectedYear = 1990;
        component.onChangeYear();
        fixture.detectChanges();

        expect(component.movies).toEqual([{
            id: 1,
            year: 1990,
            title: 'Movie Title',
            studios: ['Studio Name'],
            producers: ['Producer Name'],
            winner: true
        }]);

        expect(compiled.querySelector('table>tbody>tr>td').textContent).toContain('1');
    }));

    it('should filter movies by year 1991', () => {
        const compiled = fixture.debugElement.nativeElement;

        component.selectedYear = 1991;
        component.onChangeYear();
        fixture.detectChanges();

        expect(component.movies).toEqual([{
            id: 2,
            year: 1991,
            title: 'Movie Title 2',
            studios: ['Studio Name 2'],
            producers: ['Producer Name 2'],
            winner: true
        }]);

        expect(compiled.querySelector('table>tbody>tr>td').textContent).toContain('2');
    });

    it('should filter movies by empty year', () => {
        const compiled = fixture.debugElement.nativeElement;

        component.selectedYear = 1992;
        component.onChangeYear();
        fixture.detectChanges();

        expect(component.movies).toEqual([]);
        expect(compiled.querySelector('table>tbody>tr>td').textContent).toContain('No data avaliable');
    });
});
