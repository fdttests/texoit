import { Component, OnInit } from '@angular/core';
import MovieProducerWithIntervalBetweenWinsModel from 'src/app/data/models/movie-producer-with-interval-between-wins.model';
import GetProducersWithIntervalBetweenWinsUseCase from 'src/app/data/use-cases/get-producers-with-interval-between-wins.use-case';

@Component({
    selector: 'app-card-producers-with-long-and-short-intervals',
    templateUrl: './card-producers-with-long-and-short-intervals.component.html',
    styleUrls: ['./card-producers-with-long-and-short-intervals.component.css']
})
export class CardProducersWithLongAndShortIntervalsComponent implements OnInit {
  public max: Array<MovieProducerWithIntervalBetweenWinsModel> = [];
  public min: Array<MovieProducerWithIntervalBetweenWinsModel> = [];

  public constructor(
    private useCase: GetProducersWithIntervalBetweenWinsUseCase
  ) { }

  public ngOnInit(): void {
      this.useCase.execute()
          .subscribe((response) => {
              this.max = response?.max ?? [];
              this.min = response?.min ?? [];
          });
  }
}
