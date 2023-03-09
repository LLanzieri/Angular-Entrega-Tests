import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CambiarContrasenaComponent } from './cambiar-contrasena.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from '../../../shared/shared.module';

describe('CambiarContrasenaComponent', () => {
  let component: CambiarContrasenaComponent;
  let fixture: ComponentFixture<CambiarContrasenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CambiarContrasenaComponent],
      imports: [
        HttpClientTestingModule,
        SharedModule,
        BrowserAnimationsModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CambiarContrasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
