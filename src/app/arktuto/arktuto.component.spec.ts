import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArktutoComponent } from './arktuto.component';

describe('ArktutoComponent', () => {
  let component: ArktutoComponent;
  let fixture: ComponentFixture<ArktutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArktutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArktutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
