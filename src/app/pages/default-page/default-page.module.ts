import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultPageComponent } from './default-page.component';
import { RouterModule } from '@angular/router';
import { SidenavModule } from 'src/app/components/sidenav/sidenav.module';

@NgModule({
    declarations: [
        DefaultPageComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        SidenavModule
    ]
})
export class DefaultPageModule { }
