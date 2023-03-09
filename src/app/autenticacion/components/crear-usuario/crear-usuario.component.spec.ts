import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CrearUsuarioComponent } from './crear-usuario.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from '../../../shared/shared.module';

describe('CrearUsuarioComponent', () => {
  let component: CrearUsuarioComponent;
  let fixture: ComponentFixture<CrearUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearUsuarioComponent],
      imports: [
        HttpClientTestingModule,
        SharedModule,
        BrowserAnimationsModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CrearUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
