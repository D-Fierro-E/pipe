import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesAngularComponent } from './pipes-angular.component';

describe('PipesAngularComponent', () => {
  let component: PipesAngularComponent;
  let fixture: ComponentFixture<PipesAngularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipesAngularComponent]
    });
    fixture = TestBed.createComponent(PipesAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
