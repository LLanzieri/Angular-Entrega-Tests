import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginService } from './login.service';
import { TestBed } from '@angular/core/testing';

describe('LoginService', () => {
  let service: LoginService;
  let httpClientSpy: { get: jasmine.Spy }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new LoginService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
