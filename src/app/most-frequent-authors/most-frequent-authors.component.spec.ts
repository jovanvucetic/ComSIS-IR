import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostFrequentAuthorsComponent } from './most-frequent-authors.component';

describe('MostFrequentAuthorsComponent', () => {
  let component: MostFrequentAuthorsComponent;
  let fixture: ComponentFixture<MostFrequentAuthorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostFrequentAuthorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostFrequentAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
