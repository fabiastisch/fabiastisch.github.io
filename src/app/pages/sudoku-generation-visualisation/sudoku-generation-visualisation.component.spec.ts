import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudokuGenerationVisualisationComponent } from './sudoku-generation-visualisation.component';

describe('SudokuGenerationVisualisationComponent', () => {
  let component: SudokuGenerationVisualisationComponent;
  let fixture: ComponentFixture<SudokuGenerationVisualisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SudokuGenerationVisualisationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SudokuGenerationVisualisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
