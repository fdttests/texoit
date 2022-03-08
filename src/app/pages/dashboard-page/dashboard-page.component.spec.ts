import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CardModule } from 'src/app/components/card/card.module';
import MovieRepositoryMock from 'src/app/data/mocks/repositories/movie.repository.mock';
import MovieRepository from 'src/app/data/repositories/movie.repository';
import { CardMovieWinnersByYearComponent } from './card-movie-winners-by-year/card-movie-winners-by-year.component';
import { CardProducersWithLongAndShortIntervalsComponent } from './card-producers-with-long-and-short-intervals/card-producers-with-long-and-short-intervals.component';
import { CardStudiosWithWinnersComponent } from './card-studios-with-winners/card-studios-with-winners.component';
import { CardYearsWithMultipleWinnersComponent } from './card-years-with-multiple-winners/card-years-with-multiple-winners.component';
import { DashboardPageComponent } from './dashboard-page.component';

describe('DashboardComponent', () => {
    let component: DashboardPageComponent;
    let fixture: ComponentFixture<DashboardPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                DashboardPageComponent,
                CardMovieWinnersByYearComponent,
                CardProducersWithLongAndShortIntervalsComponent,
                CardStudiosWithWinnersComponent,
                CardYearsWithMultipleWinnersComponent,
            ],
            providers: [
                {
                    provide: MovieRepository,
                    useClass: MovieRepositoryMock
                }
            ],
            imports: [
                RouterModule,
                FormsModule,
                CardModule
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render childreen components', () => {
        const debugElement = fixture.debugElement;

        expect(debugElement.query(By.css('app-card-years-with-multiple-winners'))).toBeTruthy();
        expect(debugElement.query(By.css('app-card-studios-with-winners'))).toBeTruthy();
        expect(debugElement.query(By.css('app-card-producers-with-long-and-short-intervals'))).toBeTruthy();
        expect(debugElement.query(By.css('app-card-movie-winners-by-year'))).toBeTruthy();
    });
});
