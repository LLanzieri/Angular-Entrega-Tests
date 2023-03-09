import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginComponent } from './login.component';
import { SharedModule } from '../../../shared/shared.module';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        HttpClientTestingModule,
        SharedModule,
        BrowserAnimationsModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El componente Login se inicializa correctamente', () => {
    expect(component).toBeTruthy();
  });

  // it('A VER SI ANDA', () => {
  //   expect(component).toBeTruthy();
  // });


});
