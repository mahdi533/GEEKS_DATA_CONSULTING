import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySondageComponent } from './my-sondage.component';

describe('MySondageComponent', () => {
  let component: MySondageComponent;
  let fixture: ComponentFixture<MySondageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySondageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySondageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
