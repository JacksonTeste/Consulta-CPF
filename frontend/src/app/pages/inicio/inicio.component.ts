import { Component, OnInit } from '@angular/core';
import { CooperadoService } from './services/cooperado.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilsValidators } from '../../core/utils';
import { Cooperado } from './models/cooperado';
import { delay } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  // Validation
  public formValues: FormGroup = this.formBuilder.group({
    cpf: [
      '',
      [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11),
        UtilsValidators.cpfValidator
      ]
    ]
  })

  public name: string = '';
  public cpf: any = '';
  public situation: string = '';
  public img: string = 'regular.PNG';
  public application: any = 0;
  public current: any = 0;
  public infoCooperado: Cooperado[] = [];
  public cpfReleased: boolean = false;
  public invalidCPF: boolean = false;
  public btText: boolean = true;
  public btLoader: boolean = false;
  public footer: boolean = false;

  constructor(private cooperadoService: CooperadoService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.cooperadoService.cooperadoData()
    .subscribe(
      res => this.infoCooperado = res,
      error => console.log(error)
    )
  }

  public cpfField(): void{
    let consultCPF = this.cpf;
    this.invalidCPF = false;

    const filter = this.infoCooperado.filter( (res: Cooperado) => {
      return res.cpf == consultCPF;
    })

    if(filter.length !== 0){
      this.infoCooperado = filter;
      this.btText = false;
      this.btLoader = true;

      setTimeout(()=>{
        if(window.screen.height <= 880){
          this.footer = true;
        }
        this.btText = true;
        this.btLoader = false;
        this.cpfReleased = true;
      }, 2000);
    }else{
      this.invalidCPF = true
      this.footer = false;
      this.cpfReleased = false;
    }
  }

}
