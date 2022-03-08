import { Component, OnInit } from '@angular/core';
import MovieStudioWithWinCountModel from 'src/app/data/models/movie-studio-with-win-count.model';
import { GetMovieStudiosWithWinCountUseCase } from 'src/app/data/use-cases/get-movie-studios-with-win-count.use-case';

@Component({
    selector: 'app-card-studios-with-winners',
    templateUrl: './card-studios-with-winners.component.html',
    styleUrls: ['./card-studios-with-winners.component.css']
})
export class CardStudiosWithWinnersComponent implements OnInit {
  public studios: Array<MovieStudioWithWinCountModel> = [];

  public constructor(
    private useCase: GetMovieStudiosWithWinCountUseCase
  ) { }

  public ngOnInit(): void {
      this.useCase.execute()
          .subscribe((response) => {
              this.studios = response?.studios?.slice(0, 3) ?? [];
          });
  }
}
