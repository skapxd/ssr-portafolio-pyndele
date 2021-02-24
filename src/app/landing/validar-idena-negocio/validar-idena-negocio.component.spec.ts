import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarIdenaNegocioComponent } from './validar-idena-negocio.component';

describe('ValidarIdenaNegocioComponent', () => {
  let component: ValidarIdenaNegocioComponent;
  let fixture: ComponentFixture<ValidarIdenaNegocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidarIdenaNegocioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidarIdenaNegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
