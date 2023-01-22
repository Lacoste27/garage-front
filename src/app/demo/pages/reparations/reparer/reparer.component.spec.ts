import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReparerComponent } from './reparer.component';

describe('ReparerComponent', () => {
  let component: ReparerComponent;
  let fixture: ComponentFixture<ReparerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReparerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReparerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
