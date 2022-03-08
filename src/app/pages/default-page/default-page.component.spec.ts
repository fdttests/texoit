import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { SidenavModule } from 'src/app/components/sidenav/sidenav.module';

import { DefaultPageComponent } from './default-page.component';

describe('DefaultPageComponent', () => {
    let component: DefaultPageComponent;
    let fixture: ComponentFixture<DefaultPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ DefaultPageComponent ],
            imports: [
                RouterTestingModule,
                SidenavModule
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DefaultPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
