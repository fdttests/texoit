import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import UseCase from "../base/use-case";

@Injectable({
    providedIn: 'root'
})
export default class GetAllYearsUseCase implements UseCase<void, Array<number>> {
    private startYear = 1980;

    public constructor() { }

    public execute() {
        const currentYear = new Date().getFullYear();
        const years: Array<number> = [];

        for (let year = this.startYear; year <= currentYear; year++) {
            years.push(year);
        }

        return new Observable<Array<number>>((observer) => {
            observer.next(years);
        });
    }
}
