import { Component, OnInit } from '@angular/core';
import YearWithMultipleMovieWinnerModel from 'src/app/data/models/year-with-multiple-movie-winner.model';
import GetYearsWithMultipleWinnersUseCase from 'src/app/data/use-cases/get-years-with-multiple-winners.use-case';

@Component({
    selector: 'app-card-years-with-multiple-winners',
    templateUrl: './card-years-with-multiple-winners.component.html',
    styleUrls: ['./card-years-with-multiple-winners.component.css']
})
export class CardYearsWithMultipleWinnersComponent implements OnInit {
  public years: Array<YearWithMultipleMovieWinnerModel> = [];

  public constructor(
    private useCase: GetYearsWithMultipleWinnersUseCase
  ) { }

  public ngOnInit(): void {
      this.useCase.execute()
          .subscribe((response) => {
              this.years = response.years;
          });
  }
}
