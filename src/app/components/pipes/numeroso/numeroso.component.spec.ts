import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerosoComponent } from './numeroso.component';

describe('NumerosoComponent', () => {
  let component: NumerosoComponent;
  let fixture: ComponentFixture<NumerosoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumerosoComponent]
    });
    fixture = TestBed.createComponent(NumerosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
