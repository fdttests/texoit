import { Component, OnInit } from '@angular/core';
import MovieModel from 'src/app/data/models/movie.model';
import GetAllMoviesUseCase from 'src/app/data/use-cases/get-all-movies.use-case';
import GetAllYearsUseCase from 'src/app/data/use-cases/get-all-years.use-case';

@Component({
    selector: 'app-movie-list-page',
    templateUrl: './movie-list-page.component.html',
    styleUrls: ['./movie-list-page.component.css']
})
export class MovieListPageComponent implements OnInit {
  public pagination = {
      currentPage: 0,
      totalPages: 0,
      totalRegisters: 0,
      perPage: 10
  };

  public filter: { year: null | number; winner: null | boolean } = {
      year: null,
      winner: null
  };

  public movies: Array<MovieModel> = [];
  public years: Array<number> = [];

  public constructor(
    private getAllMoviesUseCase: GetAllMoviesUseCase,
    private getAllYearsUseCase: GetAllYearsUseCase
  ) { }

  public ngOnInit(): void {
      this.loadMovies(1);
      this.loadYears();
  }

  public onChangeYear() {
      this.loadMovies(1);
  }

  public onChangeWinner() {
      this.loadMovies(1);
  }

  public loadYears() {
      this.getAllYearsUseCase.execute()
          .subscribe((years) => {
              this.years = years;
          });
  }

  public loadMovies(page: number) {
      this.getAllMoviesUseCase
          .execute({
              page: page - 1,
              size: this.pagination.perPage,
              year: this.filter.year,
              winner: this.filter.winner
          })
          .subscribe((response) => {
              this.movies = response.content;
              this.pagination.totalPages = response.totalPages;
              this.pagination.currentPage = response.pageable.pageNumber + 1;
              this.pagination.totalRegisters = response.totalElements;
          });
  }
}
