import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultPageComponent } from './pages/default-page/default-page.component';
import { DefaultPageModule } from './pages/default-page/default-page.module';

const routes: Routes = [
    {
        "path": "",
        "component": DefaultPageComponent,
        "children": [
            {
                path: 'dashboard',
                loadChildren: () => import('src/app/pages/dashboard-page/dashboard-page.module').then(m => m.DashboardPageModule)
            },
            {
                path: 'movie-list',
                loadChildren: () => import('src/app/pages/movie-list-page/movie-list-page.module').then(m => m.MovieListPageModule)
            },
            {
                "path": "",
                "redirectTo": "dashboard",
                "pathMatch": "full"
            },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        DefaultPageModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
