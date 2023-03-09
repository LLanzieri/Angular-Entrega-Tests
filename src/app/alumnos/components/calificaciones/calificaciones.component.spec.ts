import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosService } from '../../servicio/alumnos.service';
import { CalificacionesComponent } from './calificaciones.component';

describe('CalificacionesComponent', () => {
  let component: CalificacionesComponent;
  let fixture: ComponentFixture<CalificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalificacionesComponent],
      providers: [
        AlumnosService
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CalificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
