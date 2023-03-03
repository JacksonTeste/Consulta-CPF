import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { Cooperado } from '../inicio/models/cooperado';
import { MOCK_COOPERADO } from '../inicio/services/cooperado.mock';
import { CooperadoService } from '../inicio/services/cooperado.service';
import { InicioComponent } from './inicio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


describe('InicioComponent', () => {
  let component: InicioComponent;
  let fixture: ComponentFixture<InicioComponent>;
  let service: CooperadoService;

  const mockList: Cooperado[] = MOCK_COOPERADO;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioComponent ],
      imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioComponent);
    service = TestBed.inject(CooperadoService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('(U) should cooperado', () => {
    spyOn(service, 'cooperadoData').and.returnValue(of(mockList))
    component.ngOnInit()
    fixture.detectChanges()
    expect(service.cooperadoData).toHaveBeenCalledWith()
    expect(component.infoCooperado[0].id).toEqual(1)
    expect(component.infoCooperado[0].name).toEqual('Luiz Gustavo')
    expect(component.infoCooperado[0].cpf).toEqual(14744949002)
    expect(component.infoCooperado[0].situation).toEqual('Regular')
    expect(component.infoCooperado[0].img).toEqual('regular.PNG')
    expect(component.infoCooperado[0].application).toEqual(5579324)
    expect(component.infoCooperado[0].current).toEqual(7784618)
  })
});





  


