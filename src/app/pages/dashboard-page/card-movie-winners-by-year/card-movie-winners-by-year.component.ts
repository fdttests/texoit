import { Component, OnInit } from '@angular/core';
import MovieModel from 'src/app/data/models/movie.model';
import GetAllMovieWinnersByYearUseCase from 'src/app/data/use-cases/get-all-movie-winners-by-year.use-case';
import GetAllYearsUseCase from 'src/app/data/use-cases/get-all-years.use-case';

@Component({
    selector: 'app-card-movie-winners-by-year',
    templateUrl: './card-movie-winners-by-year.component.html',
    styleUrls: ['./card-movie-winners-by-year.component.css']
})
export class CardMovieWinnersByYearComponent implements OnInit {
  public movies: Array<MovieModel> = [];
  public years: Array<number> = [];
  public selectedYear = 1980;

  public constructor(
    private getAllMoviesWinnersUseCase: GetAllMovieWinnersByYearUseCase,
    private getAllYearsUseCase: GetAllYearsUseCase
  ) { }

  public ngOnInit(): void {
      this.loadYears();
      this.loadMovies();
  }

  public onChangeYear() {
      this.loadMovies();
  }

  public loadYears() {
      this.getAllYearsUseCase.execute()
          .subscribe((years) => {
              this.years = years;
          });
  }

  public loadMovies() {
      this.getAllMoviesWinnersUseCase
          .execute(this.selectedYear)
          .subscribe((response) => {
              this.movies = response ?? [];
          });
  }
}
