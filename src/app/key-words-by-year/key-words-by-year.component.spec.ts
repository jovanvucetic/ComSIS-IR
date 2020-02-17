import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyWordsByYearComponent } from './key-words-by-year.component';

describe('KeyWordsByYearComponent', () => {
  let component: KeyWordsByYearComponent;
  let fixture: ComponentFixture<KeyWordsByYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyWordsByYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyWordsByYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
