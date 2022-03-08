import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardModule } from 'src/app/components/card/card.module';
import MovieRepositoryMock from 'src/app/data/mocks/repositories/movie.repository.mock';
import MovieRepository from 'src/app/data/repositories/movie.repository';

import { CardStudiosWithWinnersComponent } from './card-studios-with-winners.component';

describe('CardStudiosWithWinnersComponent', () => {
    let component: CardStudiosWithWinnersComponent;
    let fixture: ComponentFixture<CardStudiosWithWinnersComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CardStudiosWithWinnersComponent],
            providers: [
                {
                    provide: MovieRepository,
                    useClass: MovieRepositoryMock
                }
            ],
            imports: [CardModule]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CardStudiosWithWinnersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have top 3 winners', () => {
        expect(component.studios).toEqual([
            { name: 'Columbia', winCount: 9 },
            { name: 'Sony', winCount: 7 },
            { name: 'Warner', winCount: 4 },
        ]);

        expect(component).toBeTruthy();
    });

    it('should render top 3 winners', () => {
        const compiled = fixture.debugElement.nativeElement;
        const elements = compiled.querySelectorAll('table>tbody>tr');

        expect(elements.length).toBe(3);
        expect(elements[0].querySelector('td').textContent).toContain('Columbia');
        expect(elements[1].querySelector('td').textContent).toContain('Sony');
        expect(elements[2].querySelector('td').textContent).toContain('Warner');
    });

    it('should by empty when not loaded', () => {
        component.studios = [];

        fixture.detectChanges();

        const compiled = fixture.debugElement.nativeElement;

        expect(compiled.querySelector('table>tbody>tr>td').textContent).toContain('No data avaliable');
    });
});
