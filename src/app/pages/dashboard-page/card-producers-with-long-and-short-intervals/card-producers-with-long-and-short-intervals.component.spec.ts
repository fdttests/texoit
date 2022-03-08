import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardModule } from 'src/app/components/card/card.module';
import MovieRepositoryMock from 'src/app/data/mocks/repositories/movie.repository.mock';
import MovieRepository from 'src/app/data/repositories/movie.repository';

import { CardProducersWithLongAndShortIntervalsComponent } from './card-producers-with-long-and-short-intervals.component';

describe('CardProducersWithLongAndShortIntervalsComponent', () => {
    let component: CardProducersWithLongAndShortIntervalsComponent;
    let fixture: ComponentFixture<CardProducersWithLongAndShortIntervalsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CardProducersWithLongAndShortIntervalsComponent],
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
        fixture = TestBed.createComponent(CardProducersWithLongAndShortIntervalsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have maximum and minimal interval', () => {
        expect(component.max).toEqual([{
            "producer": "Matthew Vaughn",
            "interval": 13,
            "previousWin": 2002,
            "followingWin": 2015
        }]);

        expect(component.min).toEqual([{
            "producer": "Joel Silver",
            "interval": 1,
            "previousWin": 1990,
            "followingWin": 1991
        }]);

        expect(component).toBeTruthy();
    });

    it('should render maximum and minimal interval', () => {
        const compiled = fixture.debugElement.nativeElement;

        expect(compiled.querySelector('#cardProducerMaxIntervalTable>tbody>tr>td').textContent).toContain('Matthew Vaughn');
        expect(compiled.querySelector('#cardProducerMinIntervalTable>tbody>tr>td').textContent).toContain('Joel Silver');
    });

    it('should by empty when not loaded', () => {
        component.max = [];
        component.min = [];

        fixture.detectChanges();

        const compiled = fixture.debugElement.nativeElement;

        expect(compiled.querySelector('#cardProducerMaxIntervalTable>tbody>tr>td').textContent).toContain('No data avaliable');
    });
});
