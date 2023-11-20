import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaJuegoScreenComponent } from './pantalla-juego-screen.component';

describe('PantallaJuegoScreenComponent', () => {
  let component: PantallaJuegoScreenComponent;
  let fixture: ComponentFixture<PantallaJuegoScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PantallaJuegoScreenComponent]
    });
    fixture = TestBed.createComponent(PantallaJuegoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
