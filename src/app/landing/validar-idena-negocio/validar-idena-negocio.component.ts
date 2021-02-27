import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validar-idena-negocio',
  templateUrl: './validar-idena-negocio.component.html',
  styleUrls: ['./validar-idena-negocio.component.scss', './style.css']
})
export class ValidarIdenaNegocioComponent implements OnInit {

  
  forma: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { 
    this.crearFormulario()
  }

  ngOnInit(): void {
  }

  crearFormulario(){
    
    this.forma = this.formBuilder.group({
      nombre  : ['', [Validators.required, Validators.minLength(5)]],
      correo  : ['',[ Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"),] ],
      telefono: ['', [ Validators.required], ],
      Finanzas: [],
      Marketing: [],
      Ventas: [],
      Impuestos: [],
      'Talento humano': [],
      'Desarrollo personal': [], 
      acceptTerms: [, Validators.required],
    });
  }

  get nombreNoValido(){
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
  }

  get correoNoValido(){
    return this.forma.get('correo').invalid && this.forma.get('correo').touched;
  }

  get telefonoNoValido(){
    return this.forma.get('telefono').invalid && this.forma.get('telefono').touched;
  }

  get termsNoValid(){
    return this.forma.get('acceptTerms').invalid && this.forma.get('acceptTerms').touched;
  }

  guardar(){

    if ( this.forma.invalid) {
      
      return Object.values( this.forma.controls ).forEach( control => {

        if ( control instanceof FormGroup ) {
          Object.values( control.controls ).forEach( control => control.markAsTouched() );
          
        } else {
          
          control.markAsTouched();
        }

      })
    }

    // posteo de informacion
    this.forma.reset();  

    this.router.navigate(['/thank-you']);
  }

}
