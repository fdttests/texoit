import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnChanges {
  @Input() public pagesInterval: number = 5;
  @Input() public totalPages: number = 0;
  @Input() public currentPage: number = 1;
  @Input() public totalRegisters: number = 0;
  @Input() public perPage: number = 10;

  @Output() public onPageChange: EventEmitter<number> = new EventEmitter();
  @Output() public onPerPageChange: EventEmitter<number> = new EventEmitter();

  public sectionStartPage: number = 0;
  public sectionEndPage: number = 0;
  public sectionStartRegister: number = 0;
  public sectionEndRegister: number = 0;
  public displayNextSectionButton: boolean = false;
  public displayPreviousSectionButton: boolean = false;

  public pages: Array<number> = [];

  public constructor() { }

  public ngOnChanges(changes: SimpleChanges) {
      if (changes['currentPage'] || changes['totalPages']) {
          this.proccessPagination();
      }
  }

  public onRegistersPerPageChange(value: any) {
      if (value && this.perPage != value) {
          this.perPage = value;
          this.onPerPageChange.emit(value);
      }
  }

  public async goToPage(page: number) {
      this.onPageChange.emit(page);
  }

  public async goToPreviousPage() {
      if ((this.currentPage - 1) > 0) {
          return this.goToPage(this.currentPage - 1);
      }
  }

  public async goToNextPage() {
      if ((this.currentPage + 1) <= this.totalPages) {
          return this.goToPage(this.currentPage + 1);
      }
  }

  public async goToPreviousSection() {
      return this.goToPage(this.sectionStartPage - 1);
  }

  public async goToNextSection() {
      return this.goToPage(this.sectionEndPage + 1);
  }

  public async goToFirstPage() {
      if (this.currentPage != 1) {
          return this.goToPage(1);
      }
  }

  public async goToLastPage() {
      if (this.currentPage != this.totalPages) {
          return this.goToPage(this.totalPages);
      }
  }

  public getCurrentPage() {
      return this.currentPage;
  }

  public proccessPagination() {
      this.pages = [];

      if (this.totalPages === 0) {
          return;
      }

      this.sectionStartPage = Math.floor((this.currentPage - 1) / this.pagesInterval) * this.pagesInterval + 1;
      this.sectionEndPage = this.sectionStartPage + (this.pagesInterval - 1);

      for (let i = this.sectionStartPage; i <= this.sectionEndPage && i <= this.totalPages; i++) {
          this.pages.push(i);
      }

      this.displayPreviousSectionButton = this.sectionStartPage > 1 ? true : false;
      this.displayNextSectionButton = this.sectionEndPage < this.totalPages ? true : false;

      this.sectionStartRegister = ((this.currentPage - 1) * this.perPage) + 1;
      this.sectionEndRegister = ((this.currentPage - 1) * this.perPage) + this.perPage;
      this.sectionEndRegister = this.sectionEndRegister > this.totalRegisters ? this.totalRegisters : this.sectionEndRegister;
  }

  public resetPagination() {
      this.currentPage = 1;
      this.totalPages = 0;
  }
}
