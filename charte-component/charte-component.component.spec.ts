import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharteComponentComponent } from './charte-component.component';

describe('CharteComponentComponent', () => {
  let component: CharteComponentComponent;
  let fixture: ComponentFixture<CharteComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharteComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
