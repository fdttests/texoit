import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListPageComponent } from './movie-list-page.component';
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from 'src/app/components/card/card.module';
import { PaginationModule } from 'src/app/components/pagination/pagination.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
    {
        "path": "",
        "component": MovieListPageComponent
    }
];

@NgModule({
    declarations: [
        MovieListPageComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        CardModule,
        PaginationModule,
        RouterModule.forChild(routes)
    ]
})
export class MovieListPageModule { }
