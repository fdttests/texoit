import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
    let component: PaginationComponent;
    let fixture: ComponentFixture<PaginationComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ PaginationComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PaginationComponent);
        component = fixture.componentInstance;

        component.currentPage = 1;
        component.perPage = 10;
        component.totalPages = 100;
        component.totalRegisters = 995;
        component.pagesInterval = 5;

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should paginate correctly on page first interval', () => {
        component.currentPage = 1;
        component.proccessPagination();

        expect(component.pages).toEqual([1, 2, 3, 4, 5]);
        expect(component.sectionStartRegister).toBe(1);
        expect(component.sectionEndRegister).toBe(10);
    });

    it('should paginate correctly on middle first interval', () => {
        component.currentPage = 6;
        component.proccessPagination();

        expect(component.pages).toEqual([6, 7, 8, 9, 10]);
        expect(component.sectionStartRegister).toBe(51);
        expect(component.sectionEndRegister).toBe(60);
    });

    it('should respect page interval', () => {
        component.pagesInterval = 3;
        component.proccessPagination();

        expect(component.pages).toEqual([1, 2, 3]);
        expect(component.sectionStartRegister).toBe(1);
        expect(component.sectionEndRegister).toBe(10);
    });

    it('should respect per page', () => {
        component.currentPage = 8;
        component.perPage = 5;
        component.proccessPagination();

        expect(component.pages).toEqual([6, 7, 8, 9, 10]);
        expect(component.sectionStartRegister).toBe(36);
        expect(component.sectionEndRegister).toBe(40);
    });
});
