import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosService } from '../../servicio/alumnos.service';
import { FormAgregarAlumnoComponent } from './form-agregar-alumno.component';

describe('FormAgregarAlumnoComponent', () => {
  let component: FormAgregarAlumnoComponent;
  let fixture: ComponentFixture<FormAgregarAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormAgregarAlumnoComponent],
      providers: [
        AlumnosService
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FormAgregarAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
