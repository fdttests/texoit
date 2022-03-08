import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardModule } from 'src/app/components/card/card.module';
import MovieRepositoryMock from 'src/app/data/mocks/repositories/movie.repository.mock';
import MovieRepository from 'src/app/data/repositories/movie.repository';

import { CardYearsWithMultipleWinnersComponent } from './card-years-with-multiple-winners.component';

describe('CardYearsWithMultipleWinnersComponent', () => {
    let component: CardYearsWithMultipleWinnersComponent;
    let fixture: ComponentFixture<CardYearsWithMultipleWinnersComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CardYearsWithMultipleWinnersComponent],
            providers: [
                {
                    provide: MovieRepository,
                    useClass: MovieRepositoryMock
                }
            ],
            imports: [
                CardModule
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CardYearsWithMultipleWinnersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have years with multiple winners', () => {
        expect(component.years).toEqual([
            { year: 1986, winnerCount: 2 },
            { year: 1990, winnerCount: 2 },
            { year: 2015, winnerCount: 2 },
        ]);

        expect(component).toBeTruthy();
    });

    it('should render years with multiple winners', () => {
        const compiled = fixture.debugElement.nativeElement;
        const elements = compiled.querySelectorAll('table>tbody>tr');

        expect(elements.length).toBe(3);
        expect(elements[0].querySelector('td').textContent).toContain('1986');
        expect(elements[1].querySelector('td').textContent).toContain('1990');
        expect(elements[2].querySelector('td').textContent).toContain('2015');
    });

    it('should by empty when not loaded', () => {
        component.years = [];

        fixture.detectChanges();

        const compiled = fixture.debugElement.nativeElement;

        expect(compiled.querySelector('table>tbody>tr>td').textContent).toContain('No data avaliable');
    });
});
