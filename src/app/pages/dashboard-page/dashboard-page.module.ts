import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page.component';
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from 'src/app/components/card/card.module';
import { CardStudiosWithWinnersComponent } from './card-studios-with-winners/card-studios-with-winners.component';
import { CardProducersWithLongAndShortIntervalsComponent } from './card-producers-with-long-and-short-intervals/card-producers-with-long-and-short-intervals.component';
import { CardMovieWinnersByYearComponent } from './card-movie-winners-by-year/card-movie-winners-by-year.component';
import { CardYearsWithMultipleWinnersComponent } from './card-years-with-multiple-winners/card-years-with-multiple-winners.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
    {
        "path": "",
        "component": DashboardPageComponent
    }
];

@NgModule({
    declarations: [
        DashboardPageComponent,
        CardStudiosWithWinnersComponent,
        CardProducersWithLongAndShortIntervalsComponent,
        CardMovieWinnersByYearComponent,
        CardYearsWithMultipleWinnersComponent
    ],
    imports: [
        CommonModule,
        CardModule,
        FormsModule,
        RouterModule.forChild(routes)
    ]
})
export class DashboardPageModule { }
