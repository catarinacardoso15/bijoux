import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlasbijouxItemsComponent } from './plasbijoux-items.component';

describe('PlasbijouxItemsComponent', () => {
  let component: PlasbijouxItemsComponent;
  let fixture: ComponentFixture<PlasbijouxItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlasbijouxItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlasbijouxItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
