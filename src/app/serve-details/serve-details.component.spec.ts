import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeDetailsComponent } from './serve-details.component';

describe('ServeDetailsComponent', () => {
  let component: ServeDetailsComponent;
  let fixture: ComponentFixture<ServeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServeDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
