import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoraCorrerScreenComponent } from './hora-correr-screen.component';

describe('HoraCorrerScreenComponent', () => {
  let component: HoraCorrerScreenComponent;
  let fixture: ComponentFixture<HoraCorrerScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoraCorrerScreenComponent]
    });
    fixture = TestBed.createComponent(HoraCorrerScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
